import { isProd } from '@/lib/utils/env'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: isProd
      ? process.env.DEV_API_ENDPOINT
      : process.env.PROD_API_ENDPOINT
  }),
  refetchOnMountOrArgChange: 900,
  endpoints: () => ({})
})
