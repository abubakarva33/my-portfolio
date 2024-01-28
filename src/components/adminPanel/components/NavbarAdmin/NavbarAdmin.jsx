import { NavLink } from "react-router-dom";
import "./NavbarAdmin.css";
import { useState } from "react";
import { filterResume } from "../../../../redux/features/worksSlice";
import { useDispatch } from "react-redux";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUserCircle, FaServicestack } from "react-icons/fa";
import { MdOutlineCastForEducation, MdOutlineCompost, MdWorkOutline } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { BsFileEarmarkCode } from "react-icons/bs";
import { BiCategory, BiMessageDots } from "react-icons/bi";
import { SiExpertsexchange } from "react-icons/si";

const NavbarAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMainRoute, setIsMainRoute]=useState(true)
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className=" adminNavItem d-flex flex-column">
      <NavLink
        to={
          isMainRoute
            ? "/main-admin/private-route/abubakar/dashboard"
            : "/main-admin/private-route/abubakar/dashboard/home"
        }
        onClick={() => (setIsOpen(false), setIsClicked(false) ,setIsMainRoute(false))}
        className="adminNav"
      >
        <AiOutlineHome className="me-1" /> Home
      </NavLink>
      <NavLink
        to={"/main-admin/private-route/abubakar/dashboard/profile"}
        onClick={() => (setIsOpen(false), setIsClicked(false) ,setIsMainRoute(false))}
        className="adminNav"
      >
        <FaRegUserCircle className="me-1" /> Profile
      </NavLink>
      <NavLink
        to={"/main-admin/private-route/abubakar/dashboard/services"}
        onClick={() => (setIsOpen(false), setIsClicked(false) ,setIsMainRoute(false))}
        className="adminNav"
      >
        <FaServicestack className="me-1" /> Service
      </NavLink>
      <NavLink
        to={"/main-admin/private-route/abubakar/dashboard/work"}
        onClick={() => (setIsOpen(false), setIsClicked(false) ,setIsMainRoute(false))}
        className="adminNav"
      >
        <MdWorkOutline className="me-1" /> Recent Works
      </NavLink>
      <NavLink
        onClick={() => (setIsOpen(true), setIsClicked(false) ,setIsMainRoute(false))}
        to={"/main-admin/private-route/abubakar/dashboard/resume/main"}
        className="adminNav"
      >
        <TbListDetails className="me-1" /> Resume
      </NavLink>
      {isOpen && (
        <>
          <NavLink
            to={"/main-admin/private-route/abubakar/dashboard/resume/skill"}
            className="adminNav"
          >
            <SiExpertsexchange className="me-1" /> Skills
          </NavLink>
          <NavLink
            to={"/main-admin/private-route/abubakar/dashboard/resume/type/education"}
            onClick={() => dispatch(filterResume("type=programming&type=academic"))}
            className="adminNav"
          >
            <MdOutlineCastForEducation className="me-1" /> Education
          </NavLink>
          <NavLink
            to={"/main-admin/private-route/abubakar/dashboard/resume/type/experience"}
            onClick={() => dispatch(filterResume("type=training&type=job"))}
            className="adminNav"
          >
            <BsFileEarmarkCode className="me-1" /> Experience
          </NavLink>
        </>
      )}
      <NavLink
        to={"/main-admin/private-route/abubakar/dashboard/blog/main"}
        onClick={() => (setIsOpen(false), setIsClicked(true) ,setIsMainRoute(false))}
        className="adminNav"
      >
        <MdOutlineCompost className="me-1" /> Blogs
      </NavLink>
      {isClicked ? (
        <>
          <NavLink
            to={"/main-admin/private-route/abubakar/dashboard/blog/category"}
            className="adminNav"
          >
            <BiCategory className="me-1" />
            Category
          </NavLink>
        </>
      ) : undefined}
      <NavLink
        to={"/main-admin/private-route/abubakar/dashboard/contact/all-message"}
        onClick={() => (setIsOpen(false) ,setIsClicked(false) ,setIsMainRoute(false))}
        className="adminNav"
      >
        <BiMessageDots className="me-1" /> Contact
      </NavLink>
    </div>
  );
};

export default NavbarAdmin;
