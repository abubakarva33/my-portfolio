import { NavLink } from "react-router-dom";
import "./NavbarAdmin.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";


const NavbarAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="d-flex flex-column">
      <NavLink to={"/main-admin/private-route/abubakar/dashboard"} onClick={() => setIsOpen(false)}>
        Home
      </NavLink>
      <NavLink
        to={"/main-admin/private-route/abubakar/dashboard/profile"}
        onClick={() => setIsOpen(false)}
      >
        Profile
      </NavLink>
      <NavLink
        to={"/main-admin/private-route/abubakar/dashboard/services"}
        onClick={() => setIsOpen(false)}
      >
        Service
      </NavLink>
      <NavLink
        to={"/main-admin/private-route/abubakar/dashboard/work"}
        onClick={() => setIsOpen(false)}
      >
        Recent Works
      </NavLink>
      <NavLink
        onClick={() => setIsOpen(true)}
        to={"/main-admin/private-route/abubakar/dashboard/resume"}
      >
        Resume
      </NavLink>
      {isOpen && (
        <>
          <NavLink to={"/main-admin/private-route/abubakar/dashboard/work/skills"}>
            Skills
          </NavLink>
          <NavLink to={"/main-admin/private-route/abubakar/dashboard/work/education"}>
            Education
          </NavLink>
          <NavLink to={"/main-admin/private-route/abubakar/dashboard/work/experience"}>
            Experience
          </NavLink>
        </>
      )}
      <NavLink
        to={"/main-admin/private-route/abubakar/dashboard/blogs"}
        onClick={() => setIsOpen(false)}
      >
        Blogs
      </NavLink>
      <NavLink
        to={"/main-admin/private-route/abubakar/dashboard/contact/all-message"}
        onClick={() => setIsOpen(false)}
      >
        Contact
      </NavLink>
    </div>
  );
};

export default NavbarAdmin;
