import type {ProductDto, SuccessResponseDto} from "@/lib/types";
import {baseApi} from "../base.api";

const productApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getProductById: builder.query<ProductDto, string>({
      query: id => `/products/${id}`,
      transformResponse: (response: {product: ProductDto}) => response.product
    }),
    getProductList: builder.query<ProductDto[], void>({
      query: () => `/products/list`,
      transformResponse: (response: SuccessResponseDto<ProductDto>) =>
        response.data
    })
  })
});

export const {useGetProductListQuery, useGetProductByIdQuery} = productApi;
