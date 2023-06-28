import type { TProduct } from './TProduct'

type TOrder = Pick<TProduct, 'name' | 'price' | 'user_id' | 'id'> & {
  orderId: string
  quantity: number
}

export type { TOrder }
