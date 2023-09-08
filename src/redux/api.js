
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/'}),
  tagTypes: ["Post", "User", "cart"],
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => `services/`,
    }),
  getAService: builder.query({
      query: (serviceId) => `services/${serviceId}`,
      // providesTags: ["Post"],
    }),
  }),
})


export const { useGetServicesQuery,useGetAServiceQuery} = api;