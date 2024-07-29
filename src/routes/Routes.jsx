import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Resume from "../pages/Resume/Resume";
import Services from "../pages/Services/Services";
import RecentProjects from "../pages/RecentProjects/RecentProjects";
import Skills from "../pages/Resume/ResumeComponents/Skills/Skills";
import Education from "../pages/Resume/ResumeComponents/Education/Education";
import Experience from "../pages/Resume/ResumeComponents/Experience/Experience";
import ServiceDetails from "../pages/Services/Service/ServiceEach/ServiceEach";
import ProjectDetails from "../pages/RecentProjects/ProjectDetails/ProjectDetails";
import Game from "../components/Game/Game";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Game />,
  },
  {
    path: "/main",
    element: <MainLayout />,
    children: [
      {
        path: "/main",
        element: <Home />,
      },
      {
        path: "/main/home",
        element: <Home />,
      },
      {
        path: "/main/contacts",
        element: <Contact />,
      },
      {
        path: "/main/resume",
        element: <Resume />,
        children: [
          {
            path: "/main/resume",
            element: <Skills />,
          },
          {
            path: "/main/resume/skills",
            element: <Skills />,
          },
          {
            path: "/main/resume/educations",
            element: <Education />,
          },
          {
            path: "/main/resume/experience",
            element: <Experience />,
          },
        ],
      },
      {
        path: "/main/services",
        element: <Services />,
      },
      {
        path: "/main/services/:serviceId",
        element: <ServiceDetails />,
      },
      {
        path: "/main/recent-works",
        element: <RecentProjects />,
      },
      {
        path: "/main/recent-works/:workId",
        element: <ProjectDetails />,
      },
    ],
  },

]);
