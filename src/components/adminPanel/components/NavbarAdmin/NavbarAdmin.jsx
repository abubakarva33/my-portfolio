import { NavLink } from 'react-router-dom';
import './NavbarAdmin.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';

// onClick={() => setIsOpen(false)}

const NavbarAdmin = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='d-flex flex-column'>
            <NavLink to={'/main-admin/private-route/abubakar/dashboard'} onClick={() => setIsOpen(false)} >Home</NavLink>
            <NavLink to={'/main-admin/private-route/abubakar/dashboard/profile'} onClick={() => setIsOpen(false)} >Profile</NavLink>
            <NavLink to={'/main-admin/private-route/abubakar/dashboard/service'} onClick={() => setIsOpen(false)} >Service</NavLink>
            <NavLink to={'/main-admin/private-route/abubakar/dashboard/recent-works'} onClick={() => setIsOpen(false)} >Recent Works</NavLink>
            <NavLink onClick={() => setIsOpen(true)} to={'/main-admin/private-route/abubakar/dashboard/resume'}>Resume</NavLink>
            {
                isOpen && (<>
                    <NavLink to={'/main-admin/private-route/abubakar/dashboard/recent-works/skills'}>Skills</NavLink>
                    <NavLink to={'/main-admin/private-route/abubakar/dashboard/recent-works/education'}>Education</NavLink>
                    <NavLink to={'/main-admin/private-route/abubakar/dashboard/recent-works/experience'}>Experience</NavLink>
                </>)
            }
            <NavLink to={'/main-admin/private-route/abubakar/dashboard/blogs'} onClick={() => setIsOpen(false)} >Blogs</NavLink>
            <NavLink to={'/main-admin/private-route/abubakar/dashboard/contact'} onClick={() => setIsOpen(false)} >Contact</NavLink>
        </div>
    );
};

export default NavbarAdmin;