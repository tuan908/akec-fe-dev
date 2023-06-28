import type { TPaged, TProduct, TResponse } from '@/types'
import api from '@/app/base.api'

export default api.injectEndpoints({
  endpoints: builder => ({
    getById: builder.query<TProduct, string>({
      query: id => `products/${id}`,
      transformResponse: (
        baseQueryReturnValue: TResponse<TProduct>,
        _meta,
        _arg
      ) => baseQueryReturnValue.data
    }),
    getAllProducts: builder.query<TProduct[], Record<string, string>>({
      query: (params: Record<string, string>) => {
        return {
          url: `products/async`,
          params
        }
      },
      transformResponse: (
        baseQueryReturnValue: TResponse<TPaged<TProduct>>,
        _meta,
        _arg
      ) =>
        baseQueryReturnValue.data === null
          ? []
          : baseQueryReturnValue.data.content
    }),
    create: builder.mutation<
      void,
      Pick<TProduct, 'name' | 'price' | 'previewImageUrls'>
    >({
      query: body => ({
        url: `products`,
        method: 'POST',
        body
      })
    })
  })
})
