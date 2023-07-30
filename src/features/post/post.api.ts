import baseApi from '@/app/base.api'
import type { TPost } from '@/db/post.repository'
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
      query: id => `/posts/${id}`
    }),

    getAllPosts: build.query<TPost[], void>({
      query: () => `/posts`,
      transformResponse(baseQueryReturnValue: { posts: TPost[] }, _meta, _arg) {
        return baseQueryReturnValue.posts
      }
    })
  })
})

export default postApi
