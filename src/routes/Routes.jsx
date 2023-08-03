import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import Pricing from "../pages/Pricing/Pricing";
import Resume from "../pages/Resume/Resume";
import Services from "../pages/Services/Services";
import RecentProjects from "../pages/RecentProjects/RecentProjects";
import Skills from "../pages/Resume/ResumeComponents/Skills/Skills";
import Education from "../pages/Resume/ResumeComponents/Education/Education";
import Experience from "../pages/Resume/ResumeComponents/Experience/Experience";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/blogs',
                loader: async ()=>fetch("http://localhost:3000/blogs"),
                element: <Blogs/>
            },
            {
                path: '/contacts',
                element: <Contact/>
            },
            {
                path: '/pricing',
                element: <Pricing/>
            },
            {
                path: '/resume',
                element: <Resume/>,
                children:[
                    {
                        path: '/resume',
                        loader: async () => fetch("http://localhost:3000/resumes"),
                        element: <Skills/>
                    },
                    {
                        path: '/resume/skills',
                        loader: async () => fetch("http://localhost:3000/resumes"),
                        element: <Skills/>
                    },
                    {
                        path: '/resume/educations',
                        loader: async () => fetch("http://localhost:3000/resumes"),
                        element: <Education/>
                    },
                    {
                        path: '/resume/experience',
                        loader: async () => fetch("http://localhost:3000/resumes"),
                        element: <Experience/>
                    }

                ]
            },
            {
                path: '/services',
                element: <Services/>
            },
            {
                path: '/recent-works',
                loader: async ()=>fetch("http://localhost:3000/recentProjects"),
                element: <RecentProjects/>
            }
        ]
    }

])


