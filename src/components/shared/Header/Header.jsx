import { useContext, useEffect, useState } from "react";
import "./Header.css";
import { mainContext } from "../../../contexts/UserContext";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import DarkModeToggle from "react-dark-mode-toggle";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../redux/features/themeSlice";

const Header = () => {
  const { isDarkModeActive } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const body = document.querySelector("body");
  if (isDarkModeActive) {
    body.setAttribute("class", "darkTheme");
  } else {
    body.setAttribute("class", "lightTheme");
  }

  const handleDarkMode = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="header">
      <Navbar expand="lg" data-bs-theme={isDarkModeActive ? "dark" : "light"}>
        <Navbar.Brand href="/">
          <img src="/Images/logo.webp" alt="" className="navLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
          className=" ms-auto"
        >
          <Offcanvas.Header
            closeButton
            className="navToggle"
            data-bs-theme={isDarkModeActive ? "dark" : "light"}
          >
            <img src="/Images/profile.webp" alt="" className="" />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink to="/main/home" className="navlinkA">
                HOME
              </NavLink>
              <NavLink to="/main/services" className="navlinkA">
                SERVICES
              </NavLink>
              <NavLink to="/main/recent-works" className="navlinkA">
                RECENT WORKS
              </NavLink>
              <NavLink to="/main/resume/skills" className="navlinkA">
                RESUME
              </NavLink>
              <NavLink to="/main/blogs" className="navlinkA">
                BLOGS
              </NavLink>
              <NavLink to="/main/contacts" className="navlinkA">
                CONTACT
              </NavLink>

              <DarkModeToggle
                onChange={handleDarkMode}
                checked={isDarkModeActive}
                size={80}
                speed={1}
                className="themeToggler navlinkA"
              />
              <div className="navIcons">
                <div className="navColor">
                  <hr className="w-100  mt-3 ms-2" />
                  <h6 className="mb-0 p-0 ms-2 pb-2">Find With Me</h6>
                </div>
                <div className="d-flex ms-2 my-2">
                  <Link
                    to="https://www.facebook.com/abubakar.siddik.79219754"
                    target="_blank"
                    className="contactIcon newIcon"
                  >
                    <FiFacebook />
                  </Link>
                  <Link
                    to="https://github.com/abubakarva33"
                    target="_blank"
                    className="contactIcon newIcon"
                  >
                    <AiOutlineGithub />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/abubakar375/"
                    target="_blank"
                    className="contactIcon newIcon"
                  >
                    <FiLinkedin />
                  </Link>
                </div>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </div>
  );
};

export default Header;
