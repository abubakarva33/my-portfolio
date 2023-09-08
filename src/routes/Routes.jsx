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
import ResumeAdmin from "../components/adminPanel/components/pages/Resume/ResumeAdmin";
import BlogsAdmin from "../components/adminPanel/components/pages/Blogs/BlogsAdmin";
import ProfileAdmin from "../components/adminPanel/components/pages/Profile/ProfileAdmin";
import ContactAdmin from "../components/adminPanel/components/pages/Contact/ContactAdmin";
import RecentWorksAdmin from "../components/adminPanel/components/pages/RecentWorks/RecentWorksAdmin";
import ServiceEach from "../components/adminPanel/components/pages/Service/ServiceEach/ServiceEach";
import ServiceEdit from "../components/adminPanel/components/pages/Service/ServiceEdit/ServiceEdit";

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
                loader: async ()=>fetch("http://localhost:3000/services"),
                element: <Services/>
            },
            {
                path: '/recent-works',
                loader: async ()=>fetch("http://localhost:3000/recentProjects"),
                element: <RecentProjects/>
            }
        ]
    },
    {
        path: '/main-admin/private-route/abubakar/dashboard',
        element: <LayoutAdmin/>,
        children:[
            {
                path: '/main-admin/private-route/abubakar/dashboard',
                element: <HomeAdmin/>
            },
            {
                path: '/main-admin/private-route/abubakar/dashboard/profile',
                element: <ProfileAdmin/>
            },
            {
                path: '/main-admin/private-route/abubakar/dashboard/services',
                element: <ServiceAdmin/>
            },
            {
                path: '/main-admin/private-route/abubakar/dashboard/services/:serviceId',
                element: <ServiceEach/>
            },
            {
                path: '/main-admin/private-route/abubakar/dashboard/services/edit/:serviceId',
                element: <ServiceEdit/>
            },
            {
                path: '/main-admin/private-route/abubakar/dashboard/recent-works',
                element: <RecentWorksAdmin/>
            },
            {
                path: '/main-admin/private-route/abubakar/dashboard/resume',
                element: <ResumeAdmin/>
            },
            {
                path: '/main-admin/private-route/abubakar/dashboard/blogs',
                element: <BlogsAdmin/>
            },
            {
                path: '/main-admin/private-route/abubakar/dashboard/contact',
                element: <ContactAdmin/>
            },
        ]
    }
])


