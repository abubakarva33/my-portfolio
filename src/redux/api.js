
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/'}),
  tagTypes: ["Post", "User", "cart"],
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => `service/`,
      // transformResponse: (response, meta, arg) => response.data,
    }),
  getAService: builder.query({
      query: (serviceId) => `service/${serviceId}`,
      transformResponse: (response) => response.data,
      // providesTags: ["Post"],
    }),
  }),
})


export const { useGetServicesQuery,useGetAServiceQuery} = api;