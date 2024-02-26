import {HttpMethod} from "@/constants";
import {Post, SuccessResponseDto} from "@/lib/types";
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
    getById: build.query<Post[], string>({
      query: id => `/posts/${id}`
    }),
    getAllPosts: build.query<Post[], void>({
      query: () => `/posts`,
      transformResponse: (response: {posts: Post[]}) => response.posts
    }),
    getImageList: build.query<ImageDto[], void>({
      query: () => `/common/images/list`,
      transformResponse(response: SuccessResponseDto<ImageDto>) {
        console.log(response.data);
        return response.data;
      }
    })
  })
});

export const {useGetImageListQuery} = postApi;
