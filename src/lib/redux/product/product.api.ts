import type { Product } from '@/lib/types'
import { baseApi } from '../base.api'

export default baseApi.injectEndpoints({
  endpoints: builder => ({
    getProductById: builder.query<Product, number>({
      query: id => `/products/${id}`,
      transformResponse: (response: { product: Product }) => response.product
    }),
    getAllProducts: builder.query<Product[], void>({
      query: () => `/products`,
      transformResponse: (response: { products: Product[] }) =>
        response.products
    })
  })
})
