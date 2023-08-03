
import './Resume.css';
import { NavLink, Outlet } from 'react-router-dom';


const Resume = () => {
    return (
        <div className='px-5 py-3'>
            <div >
                <h1 className='resumeHeaderName py-4'>My Resume</h1>
                <div className='resumeHeader w-100 '>
                    <NavLink to="/resume/skills" className=' w-100'> Skills </NavLink>
                    <NavLink to="/resume/educations" className=' w-100'> Education </NavLink>
                    <NavLink to="/resume/experience" className=' w-100'> Experience </NavLink>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export default Resume;