import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  tagTypes: ["Post", "Service", "cart"],
  endpoints: (builder) => ({
    getServices: builder.query({
      query: (page) => `service?page=${page}`,
      providesTags: ["Service"],
    }),

    getAService: builder.query({
      query: (serviceId) => `service/${serviceId}`,
      transformResponse: (response) => response.data,
      providesTags: ["Service"],
    }),

    updateService: builder.mutation({
      query: ({ _id, ...body }) => ({
        url: `service/${_id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Service"],
    }),
    createService: builder.mutation({
      query: (body) => ({
        url: `service`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Service"],
    }),

    deleteService: builder.mutation({
      query: (_id) => ({
        url: `service/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Service"],
    }),
  }),
});

export const {
  useGetServicesQuery,
  useGetAServiceQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
  useCreateServiceMutation,
} = api;
