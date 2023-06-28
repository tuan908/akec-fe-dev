import { ACCESS_TOKEN } from '@/constant'
import { logOut, tokenReceived } from '@/features/auth/auth.slice'
import type { TRefreshTokenResponse } from '@/types/auth'
import { Logger } from '@/util'
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react'
import { Mutex } from 'async-mutex'
import { Context, HYDRATE } from 'next-redux-wrapper'
import { extractObjectValueByKey, windowAvailable } from './api.helper'

const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BN_SPRING_API,
  prepareHeaders: (headers, api) => {
    if (windowAvailable()) {
      // not SSR?
      Logger.info('RTK Query running on browser, skipping header manipulation')
      return {} as Headers
    }
    const ctx = api.extra as Context

    // find any cookies in the request
    let cookies = {}
    if ('req' in ctx && ctx.req && 'cookies' in ctx.req && ctx.req.cookies) {
      cookies = ctx.req.cookies
    }

    let token = ''

    const raw = extractObjectValueByKey(cookies, ACCESS_TOKEN)

    if (raw.length > 0) {
      token = raw[0]
      Logger.info(`Successfully retrieve authentication token`)
      headers.append('Authorization', token)

      return headers
    }

    Logger.info('Not found any authentication token')
    return headers
  }
})

const baseQueryWithReAuthentication: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      try {
        const refreshResult = await baseQuery(
          'auth/refreshToken',
          api,
          extraOptions
        )
        if (refreshResult.data) {
          api.dispatch(
            tokenReceived(refreshResult.data as TRefreshTokenResponse)
          )
          // retry the initial query
          result = await baseQuery(args, api, extraOptions)
        } else {
          api.dispatch(logOut())
        }
      } finally {
        // release must be called once the mutex should be released again.
        release()
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}

const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithReAuthentication,
  refetchOnMountOrArgChange: 900,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: () => ({})
})

export default baseApi
