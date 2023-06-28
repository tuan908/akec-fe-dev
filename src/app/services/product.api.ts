import {
  REQUEST_PARAM_PAGE,
  REQUEST_PARAM_SIZE,
  REQUEST_PARAM_SORT
} from '@/constant'
import { TProduct } from '@/types'
import { api } from './base.api'

type TProductResponsePayload = {
  success: boolean
  message: string
  status: string
  data: {
    content: TProduct[]
    empty: boolean
    first: boolean
    last: boolean
    number: number
    numberOfElements: number
    pageable: {
      offset: number
      pageNumber: number
      pageSize: number
      paged: boolean
      sort: {
        empty: boolean
        sorted: boolean
        unsorted: boolean
      }
      unpaged: boolean
    }
    size: number
    sort: {
      empty: boolean
      sorted: boolean
      unsorted: boolean
    }
    totalElements: number
    totalPages: number
  }
}

const productApi = api.injectEndpoints({
  endpoints: builder => ({
    getProductById: builder.query<TProduct, string>({
      query: id => `product/${id}`
    }),
    getProducts: builder.query<TProductResponsePayload, URLSearchParams>({
      query: (args: URLSearchParams) => {
        return {
          url: `products/async`,
          params: {
            page: args.get(REQUEST_PARAM_PAGE),
            size: args.get(REQUEST_PARAM_SIZE),
            sort: args.get(REQUEST_PARAM_SORT)
          }
        }
      }
    })
  })
})

export const { useGetProductByIdQuery, useGetProductsQuery } = productApi

export const { getProducts, getProductById } = productApi.endpoints

export default productApi
