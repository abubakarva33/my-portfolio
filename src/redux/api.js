import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://portfolio-server-black-xi.vercel.app/api/v1/" }),

  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => `/auth`,
    }),

    getServices: builder.query({
      query: (page) => `service?page=${page}`,
    }),
    getAService: builder.query({
      query: (serviceId) => `service/${serviceId}`,
      transformResponse: (response) => response.data,
    }),

    getWorks: builder.query({
      query: (page) => `work?sortBy=preferredIndex&sortOrder=asc&page=${page}`,
    }),
    getAWork: builder.query({
      query: (workId) => `work/${workId}`,
      transformResponse: (response) => response.data,
    }),

    createMessage: builder.mutation({
      query: (body) => ({
        url: `contact`,
        method: "POST",
        body,
      }),
    }),

    getResume: builder.query({
      query: (filterResumeData) => `education?type=${filterResumeData}`,
    }),
    getSkill: builder.query({
      query: (type) => `skill?type=${type}`,
    }),
  }),
});

export const {
  useGetServicesQuery,
  useGetAServiceQuery,
  useGetWorksQuery,
  useGetAWorkQuery,
  useCreateMessageMutation,
  useGetResumeQuery,
  useGetSkillQuery,
  useGetProfileQuery,
} = api;
