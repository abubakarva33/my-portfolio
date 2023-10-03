
import './Resume.css';
import { NavLink, Outlet } from 'react-router-dom';


const Resume = () => {
    return (
        <div className='mx-1 mb-4'>
            <div className='mb-3 mx-1'>
                <h2 className='resumeHeaderName py-3'>MY RESUME</h2>
                <div className='resumeHeader w-100'>
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