import type { TProduct } from '@/types'
import api from '@/app/base.api'

export default api.injectEndpoints({
  endpoints: builder => ({
    getProductById: builder.query<TProduct, number>({
      query: id => `/products/${id}`,
      transformResponse: (
        baseQueryReturnValue: { product: TProduct },
        _meta,
        _arg
      ) => baseQueryReturnValue.product
    }),
    getAllProducts: builder.query<TProduct[], void>({
      query: () => `/products`,
      transformResponse: (
        baseQueryReturnValue: { products: TProduct[] },
        _meta,
        _arg
      ) => baseQueryReturnValue.products
    })
  })
})
