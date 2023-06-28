import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError
} from '@reduxjs/toolkit/dist/query/react'
import { Mutex } from 'async-mutex'
import Cookies from 'js-cookie'
import { HYDRATE } from 'next-redux-wrapper'
import { loggedOut, tokenReceived } from '../features/auth/auth.slice'

const mutex = new Mutex()
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BN_SPRING_API,
  prepareHeaders: headers => {
    const accessToken = Cookies.get('access_token')
    if (accessToken) {
      headers.set('Authorization', accessToken)
    }
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
          api.dispatch(tokenReceived(refreshResult.data))
          // retry the initial query
          result = await baseQuery(args, api, extraOptions)
        } else {
          api.dispatch(loggedOut())
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

export const api = createApi({
  reducerPath: 'API_BASE',
  baseQuery: baseQueryWithReAuthentication,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: () => ({})
})
