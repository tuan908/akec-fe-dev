import baseApi from '@/app/base.api'
import type { TPaged, TPost, TResponse } from '@/types'
import { HttpMethod } from '../feature.constant'

const postApi = baseApi.injectEndpoints({
  endpoints: build => ({
    create: build.mutation<void, FormData>({
      query: body => ({
        url: '/posts',
        method: HttpMethod.POST,
        body
      })
    }),
    getById: build.query<TPost, string>({
      query: id => `/posts/${id}`,
      transformResponse: (
        baseQueryReturnValue: TResponse<TPost>,
        _meta,
        _arg
      ) => baseQueryReturnValue.data
    }),

    getAllPosts: build.query<TPost[], Record<string, string>>({
      query: params => ({ url: `/posts`, params }),
      transformResponse: (
        baseQueryReturnValue: TResponse<TPaged<TPost>>,
        _meta,
        _arg
      ) =>
        baseQueryReturnValue.data === null
          ? []
          : baseQueryReturnValue.data.content
    })
  })
})

export default postApi
