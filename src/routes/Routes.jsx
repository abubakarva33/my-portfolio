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
import ResumeLayout from "../components/adminPanel/components/pages/ResumeLayout/ResumeLayout";
import SkillAdmin from "../components/adminPanel/components/pages/Skills/SkillMain/SkillAdmin";
import SkillEach from "../components/adminPanel/components/pages/Skills/SkillEach/SkillEach";
import SkillEdit from "../components/adminPanel/components/pages/Skills/SkillEdit/SkillEdit";
import SkillCreate from "../components/adminPanel/components/pages/Skills/SkillForm/SkillCreate";
import ProfileAdmin from "../components/adminPanel/components/pages/Profile/ProfileMain/ProfileAdmin";
import ProfileEach from "../components/adminPanel/components/pages/Profile/ProfileEach/ProfileEach";
import ProfileEdit from "../components/adminPanel/components/pages/Profile/ProfileEdit/ProfileEdit";
import ProfileCreate from "../components/adminPanel/components/pages/Profile/ProfileForm/ProfileCreate";
import ServiceDetails from "../pages/Services/Service/ServiceEach/ServiceEach";

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
        element: <Services />
      },
      {
        path: "/services/:serviceId",
        element: <ServiceDetails />
      },
      {
        path: "/recent-works",
        element: <RecentProjects />,
      },
      {
        path: "/recent-works/:workId",
        element: <RecentProjects />,
      },
    ],
  },


  // admin section routing //
  {
    path: "/main-admin/private-route/abubakar/dashboard",
    element: <LayoutAdmin />,
    children: [

      // home section  ///
      {
        path: "/main-admin/private-route/abubakar/dashboard",
        element: <HomeAdmin />,
      },
      {
        path: "/main-admin/private-route/abubakar/dashboard/home",
        element: <HomeAdmin />,
      },

      // profile section //
      {
        path: "/main-admin/private-route/abubakar/dashboard/profile",
        element: <ProfileAdmin />,
      },
      {
        path: "/main-admin/private-route/abubakar/dashboard/profile/:profileId",
        element: <ProfileEach />,
      },
      {
        path: "/main-admin/private-route/abubakar/dashboard/profile/edit/:profileId",
        element: <ProfileEdit />,
      },
      {
        path: "/main-admin/private-route/abubakar/dashboard/profile/create",
        element: <ProfileCreate />,
      },


      // service section //
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
 
      // recent work section //
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

      // resume section //
      {
        path: "/main-admin/private-route/abubakar/dashboard/resume",
        element: <ResumeLayout />,
        children: [
          {
            path: "/main-admin/private-route/abubakar/dashboard/resume/main",
            element: <SkillAdmin />,
          },
          {
            path: "/main-admin/private-route/abubakar/dashboard/resume/skill",
            element: <SkillAdmin />,
          },
          {
            path: "/main-admin/private-route/abubakar/dashboard/resume/skill/:skillId",
            element: <SkillEach />,
          },
          {
            path: "/main-admin/private-route/abubakar/dashboard/resume/skill/edit/:skillId",
            element: <SkillEdit />,
          },
          {
            path: "/main-admin/private-route/abubakar/dashboard/resume/skill/create",
            element: <SkillCreate />,
          },
          {
            path: "/main-admin/private-route/abubakar/dashboard/resume/type/education",
            element: <ResumeAdmin />,
          },
          {
            path: "/main-admin/private-route/abubakar/dashboard/resume/type/experience",
            element: <ResumeAdmin />,
          },
          {
            path: "/main-admin/private-route/abubakar/dashboard/resume/type/:resumeId",
            element: <ResumeEach />,
          },
          {
            path: "/main-admin/private-route/abubakar/dashboard/resume/type/edit/:resumeId",
            element: <ResumeEdit />,
          },
          {
            path: "/main-admin/private-route/abubakar/dashboard/resume/type/create",
            element: <ResumeCreate />,
          },
        ],
      },

      // blog //
      {
        path: "/main-admin/private-route/abubakar/dashboard/blog/main",
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
