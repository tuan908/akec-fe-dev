export type { TOrder, TProduct, TPaged } from './product'
export type { TAboutPost } from './about'
export type { TLogin, TLoginRequest } from './auth'
export type {TPost} from './post'

export type TResponse<T> = {
  data: T
  success: boolean
  message: string | null
  status: number
}