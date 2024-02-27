import {HttpMethod} from "@/constants";
import {PostDto, SuccessResponseDto} from "@/lib/types";
import {baseApi} from "../base.api";

export type ImageDto = {
  id: number;
  url: string;
};

const postApi = baseApi.injectEndpoints({
  endpoints: build => ({
    create: build.mutation<void, FormData>({
      query: body => ({
        url: "/posts",
        method: HttpMethod.POST,
        body
      })
    }),
    getById: build.query<PostDto[], string>({
      query: id => `/posts/${id}`
    }),
    getAllPosts: build.query<PostDto[], void>({
      query: () => `/posts`,
      transformResponse: (response: {posts: PostDto[]}) => response.posts
    }),
    getImageList: build.query<ImageDto[], void>({
      query: () => `/common/images/list`,
      transformResponse: (response: SuccessResponseDto<ImageDto[]>) =>
        response.data
    })
  })
});

export const {useGetImageListQuery} = postApi;
