import { type SelectQueryBuilder } from 'kysely'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

export type { TAboutPost } from './about'
export type { TLogin, TLoginRequest } from './auth'
export type { TOrder, TPaged, TProduct } from './product'

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

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}