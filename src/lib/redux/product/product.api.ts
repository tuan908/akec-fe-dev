import type {Product, SuccessResponseDto} from "@/lib/types";
import {baseApi} from "../base.api";

const productApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getProductById: builder.query<Product, string>({
      query: id => `/products/${id}`,
      transformResponse: (response: {product: Product}) => response.product
    }),
    getProductList: builder.query<Product[], void>({
      query: () => `/products/list`,
      transformResponse: (response: SuccessResponseDto<Product>) =>
        response.data
    })
  })
});

export const {useGetProductListQuery, useGetProductByIdQuery} = productApi;
