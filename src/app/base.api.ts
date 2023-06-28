import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { HYDRATE } from 'next-redux-wrapper'

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_NODEJS_API
})

export default createApi({
  reducerPath: 'baseApi',
  baseQuery,
  refetchOnMountOrArgChange: 900,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: () => ({})
})