import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://bakar-portfolio.vercel.app/api/v1/" }),
  tagTypes: [
    "Post",
    "Service",
    "cart",
    "Work",
    "Message",
    "Blog",
    "Category",
    "Resume",
    "Skill",
    "Profile",
  ],
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => `/auth`,
      providesTags: ["Profile"],
    }),
    
    getServices: builder.query({
      query: (page) => `service?page=${page}`,
      providesTags: ["Service"],
    }),
    getAService: builder.query({
      query: (serviceId) => `service/${serviceId}`,
      transformResponse: (response) => response.data,
      providesTags: ["Service"],
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

    createMessage: builder.mutation({
      query: (body) => ({
        url: `contact`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Message"],
    }),

    getResume: builder.query({
      query: (filterResumeData) => `education?type=${filterResumeData}`,
      providesTags: ["Resume"],
    }),
    getSkill: builder.query({
      query: (type) => `skill?type=${type}`,
      providesTags: ["Skill"],
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
