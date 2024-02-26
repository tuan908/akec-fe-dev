import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "API",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BN_SPRING_API
  }),
  refetchOnMountOrArgChange: 900,
  endpoints: () => ({})
});
