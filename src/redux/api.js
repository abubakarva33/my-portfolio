import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  tagTypes: ["Post", "Service", "cart", "Work","Message"],
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

    getWorks: builder.query({
      query: (page) => `work?page=${page}`,
      providesTags: ["Work"],
    }),

    getAWork: builder.query({
      query: (workId) => `work/${workId}`,
      transformResponse: (response) => response.data,
      providesTags: ["Work"],
    }),

    updateWork: builder.mutation({
      query: ({ _id, ...body }) => ({
        url: `work/${_id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Work"],
    }),
    createWork: builder.mutation({
      query: (body) => ({
        url: `work`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Work"],
    }),
    deleteWork: builder.mutation({
      query: (_id) => ({
        url: `work/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Work"],
    }),

    getMessage: builder.query({
      query: (page) => `contact?page=${page}`,
      providesTags: ["Message"],
    }),
    getAMessage: builder.query({
      query: (workId) => `contact/${workId}`,
      transformResponse: (response) => response.data,
      providesTags: ["Message"],
    }),
    createMessage: builder.mutation({
      query: (body) => ({
        url: `contact`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Message"],
    }),
    deleteMessage: builder.mutation({
      query: (_id) => ({
        url: `contact/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Message"],
    }),
    deleteMultipleMessage: builder.mutation({
      query: (body) => ({
        url: `contact/bulk`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Message"],
    }),
  }),
});

export const {
  useGetServicesQuery,
  useGetAServiceQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
  useCreateServiceMutation,
  useGetWorksQuery,
  useGetAWorkQuery,
  useUpdateWorkMutation,
  useDeleteWorkMutation,
  useCreateWorkMutation,
  useGetMessageQuery,
  useGetAMessageQuery,
  useDeleteMessageMutation,
  useDeleteMultipleMessageMutation,
  useCreateMessageMutation
} = api;
