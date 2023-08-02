import { type SelectQueryBuilder } from 'kysely'

export type { TOrder, TProduct, TPaged } from './product'
export type { TAboutPost } from './about'
export type { TLogin, TLoginRequest } from './auth'

export type TResponse<T> = {
  data: T
  success: boolean
  message: string | null
  status: number
}

export type KyselyQueryReturnType<
  KyselyQuery extends SelectQueryBuilder<
    Record<string, unknown>,
    string,
    unknown
  >
> = Awaited<ReturnType<KyselyQuery['execute']>>[number]