import { HttpMethod } from '@/constants'
import { type TImage } from '@/lib/database/image.repository'
import { type Post } from '@/lib/database/post.repository'
import { baseApi } from '../base.api'

const postApi = baseApi.injectEndpoints({
  endpoints: build => ({
    create: build.mutation<void, FormData>({
      query: body => ({
        url: '/posts',
        method: HttpMethod.POST,
        body
      })
    }),
    getById: build.query<Post[], string>({
      query: id => `/posts/${id}`
    }),
    getAllPosts: build.query<Post[], void>({
      query: () => `/posts`,
      transformResponse: (response: { posts: Post[] }) => response.posts
    }),
    getImages: build.query<TImage[], void>({
      query: () => `/image`,
      transformResponse: (response: { images: TImage[] }) => response.images
    })
  })
})

export default postApi
