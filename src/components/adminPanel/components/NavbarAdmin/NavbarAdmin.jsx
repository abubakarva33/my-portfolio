import { NavLink } from "react-router-dom";
import "./NavbarAdmin.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import { filterResume } from "../../../../redux/features/worksSlice";
import { useDispatch } from "react-redux";

const NavbarAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const dispatch =useDispatch();
  return (
    <div className="d-flex flex-column">
      <NavLink
        to={"/main-admin/private-route/abubakar/dashboard"}
        onClick={() => (setIsOpen(false), setIsClicked(false))}
      >
        Home
      </NavLink>
      <NavLink
        to={"/main-admin/private-route/abubakar/dashboard/profile"}
        onClick={() => (setIsOpen(false), setIsClicked(false))}
      >
        Profile
      </NavLink>
      <NavLink
        to={"/main-admin/private-route/abubakar/dashboard/services"}
        onClick={() => (setIsOpen(false), setIsClicked(false))}
      >
        Service
      </NavLink>
      <NavLink
        to={"/main-admin/private-route/abubakar/dashboard/work"}
        onClick={() => (setIsOpen(false), setIsClicked(false))}
      >
        Recent Works
      </NavLink>
      <NavLink
        onClick={() => (setIsOpen(true), setIsClicked(false))}
        to={"/main-admin/private-route/abubakar/dashboard/resume/skill"}
      >
        Resume
      </NavLink>
      {isOpen && (
        <>
          <NavLink to={"/main-admin/private-route/abubakar/dashboard/resume/skill"}>
            Skills
          </NavLink>
          <NavLink
            to={"/main-admin/private-route/abubakar/dashboard/resume/type/education"}
            onClick={() => dispatch(filterResume("type=programming&type=academic"))}
          >
            Education
          </NavLink>
          <NavLink
            to={"/main-admin/private-route/abubakar/dashboard/resume/type/experience"}
            onClick={() => dispatch(filterResume("type=training&type=job"))}
          >
            Experience
          </NavLink>
        </>
      )}
      <NavLink
        to={"/main-admin/private-route/abubakar/dashboard/blog"}
        onClick={() => (setIsOpen(false), setIsClicked(true))}
      >
        Blogs
      </NavLink>
      {isClicked ? (
        <>
          <NavLink to={"/main-admin/private-route/abubakar/dashboard/blog/category"}>
            Category
          </NavLink>
        </>
      ) : undefined}
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
