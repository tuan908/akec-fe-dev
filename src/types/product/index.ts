import { z } from 'zod'

const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  preview_image_urls: z.string().array(),
  created_time: z.date(),
  updated_time: z.date()
})

const OrderSchema = ProductSchema.pick({
  id: true,
  name: true,
  price: true,
  userId: true
}).merge(z.object({ orderId: z.string(), quantity: z.number() }))

export type TProduct = z.infer<typeof ProductSchema>
export type TOrder = z.infer<typeof OrderSchema>

export type TPaged<TElement> = {
  content: TElement[]
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
