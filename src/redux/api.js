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

    // recent works //
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

    // messages section //
    getMessage: builder.query({
      query: ({ page, filter }) => `contact?page=${page}&query=${filter}`,
      providesTags: ["Message"],
    }),
    getAMessage: builder.query({
      query: (contactId) => `contact/${contactId}`,
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

    // blog section //
    getBlogs: builder.query({
      query: (page) => `blog?page=${page}`,
      providesTags: ["Blog"],
    }),
    getABlog: builder.query({
      query: (blogId) => `blog/${blogId}`,
      transformResponse: (response) => response.data,
      providesTags: ["Blog"],
    }),
    createBlog: builder.mutation({
      query: (body) => ({
        url: `blog`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Blog"],
    }),
    updateBlog: builder.mutation({
      query: ({ _id, ...body }) => ({
        url: `blog/${_id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Blog"],
    }),
    deleteBlog: builder.mutation({
      query: (_id) => ({
        url: `blog/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blog"],
    }),

    // resume section //
    getResume: builder.query({
      query: (filterResumeData) => `education?type=${filterResumeData}`,
      providesTags: ["Resume"],
    }),
    getAResume: builder.query({
      query: (educationId) => `education/${educationId}`,
      transformResponse: (response) => response.data,
      providesTags: ["Resume"],
    }),
    createResume: builder.mutation({
      query: (body) => ({
        url: `education`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Resume"],
    }),
    updateResume: builder.mutation({
      query: ({ _id, ...body }) => ({
        url: `education/${_id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Resume"],
    }),
    deleteResume: builder.mutation({
      query: (_id) => ({
        url: `education/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Resume"],
    }),

    // skill section //
    getSkill: builder.query({
      query: (type) => `skill?type=${type}`,
      providesTags: ["Skill"],
    }),
    getASkill: builder.query({
      query: (skillId) => `skill/${skillId}`,
      transformResponse: (response) => response.data,
      providesTags: ["Skill"],
    }),
    createSkill: builder.mutation({
      query: (body) => ({
        url: `skill`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Skill"],
    }),
    updateSkill: builder.mutation({
      query: ({ _id, ...body }) => ({
        url: `skill/${_id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Skill"],
    }),
    deleteSkill: builder.mutation({
      query: (_id) => ({
        url: `skill/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Skill"],
    }),

    // profile section //
    getProfile: builder.query({
      query: () => `/auth`,
      providesTags: ["Profile"],
    }),
    getAProfile: builder.query({
      query: (authId) => `auth/${authId}`,
      transformResponse: (response) => response.data,
      providesTags: ["Profile"],
    }),
    createProfile: builder.mutation({
      query: (body) => ({
        url: `auth`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Profile"],
    }),
    updateProfile: builder.mutation({
      query: ({ _id, ...body }) => ({
        url: `auth/${_id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Profile"],
    }),
    deleteProfile: builder.mutation({
      query: (_id) => ({
        url: `auth/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Profile"],
    }),

    // category section //
    getCategory: builder.query({
      query: () => `category`,
      providesTags: ["Category"],
    }),
    getACategory: builder.query({
      query: (categoryId) => `category/${categoryId}`,
      transformResponse: (response) => response.data,
      providesTags: ["Category"],
    }),
    createCategory: builder.mutation({
      query: (body) => ({
        url: `category`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategory: builder.mutation({
      query: ({ _id, ...body }) => ({
        url: `category/${_id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: builder.mutation({
      query: (_id) => ({
        url: `category/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
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
  useCreateMessageMutation,
  useGetBlogsQuery,
  useGetABlogQuery,
  useDeleteBlogMutation,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useGetCategoryQuery,
  useGetACategoryQuery,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
  useCreateCategoryMutation,
  useGetResumeQuery,
  useGetAResumeQuery,
  useCreateResumeMutation,
  useDeleteResumeMutation,
  useUpdateResumeMutation,
  useGetSkillQuery,
  useGetASkillQuery,
  useDeleteSkillMutation,
  useCreateSkillMutation,
  useUpdateSkillMutation,
  useGetProfileQuery,
  useGetAProfileQuery,
  useDeleteProfileMutation,
  useUpdateProfileMutation,
  useCreateProfileMutation,
} = api;
