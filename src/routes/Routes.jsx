import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import Resume from "../pages/Resume/Resume";
import Services from "../pages/Services/Services";
import RecentProjects from "../pages/RecentProjects/RecentProjects";
import Skills from "../pages/Resume/ResumeComponents/Skills/Skills";
import Education from "../pages/Resume/ResumeComponents/Education/Education";
import Experience from "../pages/Resume/ResumeComponents/Experience/Experience";
import LayoutAdmin from "../components/adminPanel/layouts/LayoutAdmin";
import HomeAdmin from "../components/adminPanel/components/pages/Home/HomeAdmin";
import ServiceAdmin from "../components/adminPanel/components/pages/Service/ServiceAdmin";
import ProfileAdmin from "../components/adminPanel/components/pages/Profile/ProfileAdmin";
import ContactAdmin from "../components/adminPanel/components/pages/Contact/ContactAdmin";
import ServiceEach from "../components/adminPanel/components/pages/Service/ServiceEach/ServiceEach";
import ServiceEdit from "../components/adminPanel/components/pages/Service/ServiceEdit/ServiceEdit";
import ServiceCreate from "../components/adminPanel/components/pages/Service/ServiceEdit/ServiceCreate";
import WorkAdmin from "../components/adminPanel/components/pages/Works/WorkMain/WorkAdmin";
import WorkEach from "../components/adminPanel/components/pages/Works/WorkEach/WorkEach";
import WorkEdit from "../components/adminPanel/components/pages/Works/WorksEdit/WorksEdit";
import WorkCreate from "../components/adminPanel/components/pages/Works/WorkForm/WorksCreate";
import MessageEach from "../components/adminPanel/components/pages/Contact/MessageEach/MessageEach";
import MessageTable from "../components/adminPanel/components/pages/Contact/MessageTable/MessageTable";
import ImportantMessage from "../components/adminPanel/components/pages/Contact/MessageTable/ImportantMessage";
import BlogAdmin from "../components/adminPanel/components/pages/Blogs/BlogMain/BlogAdmin";
import BlogEach from "../components/adminPanel/components/pages/Blogs/BlogEach/BlogEach";
import BlogEdit from "../components/adminPanel/components/pages/Blogs/BlogEdit/BlogEdit";
import BlogCreate from "../components/adminPanel/components/pages/Blogs/BlogForm/BlogCreate";
import Category from "../components/adminPanel/components/pages/Blogs/Category/Category";
import ResumeEach from "../components/adminPanel/components/pages/Education/ResumeEach/ResumeEach";
import ResumeEdit from "../components/adminPanel/components/pages/Education/ResumeEdit/ResumeEdit";
import ResumeCreate from "../components/adminPanel/components/pages/Education/ResumeForm/ResumeCreate";
import ResumeAdmin from "../components/adminPanel/components/pages/Education/ResumeMain/ResumeAdmin";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        loader: async () => fetch("http://localhost:3000/blogs"),
        element: <Blogs />,
      },
      {
        path: "/contacts",
        element: <Contact />,
      },
      {
        path: "/resume",
        element: <Resume />,
        children: [
          {
            path: "/resume",
            loader: async () => fetch("http://localhost:3000/resumes"),
            element: <Skills />,
          },
          {
            path: "/resume/skills",
            loader: async () => fetch("http://localhost:3000/resumes"),
            element: <Skills />,
          },
          {
            path: "/resume/educations",
            loader: async () => fetch("http://localhost:3000/resumes"),
            element: <Education />,
          },
          {
            path: "/resume/experience",
            loader: async () => fetch("http://localhost:3000/resumes"),
            element: <Experience />,
          },
        ],
      },
      {
        path: "/services",
        loader: async () => fetch("http://localhost:3000/services"),
        element: <Services />,
      },
      {
        path: "/recent-works",
        loader: async () => fetch("http://localhost:3000/recentProjects"),
        element: <RecentProjects />,
      },
    ],
  },
  {
    path: "/main-admin/private-route/abubakar/dashboard",
    element: <LayoutAdmin />,
    children: [
      {
        path: "/main-admin/private-route/abubakar/dashboard",
        element: <HomeAdmin />,
      },
      {
        path: "/main-admin/private-route/abubakar/dashboard/profile",
        element: <ProfileAdmin />,
      },

      {
        path: "/main-admin/private-route/abubakar/dashboard/services",
        element: <ServiceAdmin />,
      },
      {
        path: "/main-admin/private-route/abubakar/dashboard/services/:serviceId",
        element: <ServiceEach />,
      },
      {
        path: "/main-admin/private-route/abubakar/dashboard/services/edit/:serviceId",
        element: <ServiceEdit />,
      },
      {
        path: "/main-admin/private-route/abubakar/dashboard/services/create",
        element: <ServiceCreate />,
      },

      {
        path: "/main-admin/private-route/abubakar/dashboard/work",
        element: <WorkAdmin />,
      },
      {
        path: "/main-admin/private-route/abubakar/dashboard/work/:workId",
        element: <WorkEach />,
      },
      {
        path: "/main-admin/private-route/abubakar/dashboard/work/edit/:workId",
        element: <WorkEdit />,
      },
      {
        path: "/main-admin/private-route/abubakar/dashboard/work/create",
        element: <WorkCreate />,
      },

      {
        path: "/main-admin/private-route/abubakar/dashboard/resume",
        element: <ResumeAdmin />,
      },
      {
        path: "/main-admin/private-route/abubakar/dashboard/resume/:resumeId",
        element: <ResumeEach />,
      },
      {
        path: "/main-admin/private-route/abubakar/dashboard/resume/edit/:resumeId",
        element: <ResumeEdit />,
      },
      {
        path: "/main-admin/private-route/abubakar/dashboard/resume/create",
        element: <ResumeCreate />,
      },


      // blog //
      {
        path: "/main-admin/private-route/abubakar/dashboard/blog",
        element: <BlogAdmin />,
      },
      {
        path: "/main-admin/private-route/abubakar/dashboard/blog/:blogId",
        element: <BlogEach />,
      },
      {
        path: "/main-admin/private-route/abubakar/dashboard/blog/edit/:blogId",
        element: <BlogEdit />,
      },
      {
        path: "/main-admin/private-route/abubakar/dashboard/blog/create",
        element: <BlogCreate />,
      },
      {
        path: "/main-admin/private-route/abubakar/dashboard/blog/category",
        element: <Category />,
      },

// message//
      {
        path: "/main-admin/private-route/abubakar/dashboard/contact",
        element: <ContactAdmin />,
        children: [
          {
            path: "/main-admin/private-route/abubakar/dashboard/contact/",
            element: <MessageTable />,
          },
          {
            path: "/main-admin/private-route/abubakar/dashboard/contact/all-message",
            element: <MessageTable />,
          },
          {
            path: "/main-admin/private-route/abubakar/dashboard/contact/important-message",
            element: <ImportantMessage />,
          },
        ],
      },
      {
        path: "/main-admin/private-route/abubakar/dashboard/contact/:contactId",
        element: <MessageEach />,
      },
    ],
  },
]);
