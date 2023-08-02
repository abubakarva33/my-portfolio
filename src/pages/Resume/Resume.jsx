
import './Resume.css';
import { Link, Outlet } from 'react-router-dom';


const Resume = () => {
    return (
        <div className='px-5 py-3'>
            <div >
                <h1 className='resumeHeaderName py-4'>My Resume</h1>
                <div className='resumeHeader w-100 '>
                    <Link to="/resume/skills" className='resumeBtn w-100'> Skills </Link>
                    <Link to="/resume/educations" className='resumeBtn w-100'> Education </Link>
                    <Link to="/resume/experience" className='resumeBtn w-100'> Experience </Link>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export default Resume;