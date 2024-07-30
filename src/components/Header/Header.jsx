import "./Header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink } from "react-router-dom";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import DarkModeToggle from "react-dark-mode-toggle";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { toggleTheme } from "../../redux/themeSlice";

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
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
  const handleClose = () => setShowOffcanvas(false);
  const handleToggle = () => setShowOffcanvas((prev) => !prev);

  return (
    <div className="header">
      <Navbar
        collapseOnSelect={true}
        expand="lg"
        data-bs-theme={isDarkModeActive ? "dark" : "light"}
      >
        <Navbar.Brand href="/">
          <img src="/Images/logo.webp" alt="" className="navLogo" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleToggle} aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
          className=" ms-auto"
          show={showOffcanvas}
          onHide={handleClose}
        >
          <Offcanvas.Header
            closeButton
            className="navToggle"
            data-bs-theme={isDarkModeActive ? "dark" : "light"}
          >
            <img src="/Images/logo.webp" style={{ height: 20 }} />

            {/* <img src="/Images/profile.webp" alt="" className="" /> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
              <NavLink to="/main/home" className="navlinkA" onClick={handleClose}>
                HOME
              </NavLink>
              <NavLink to="/main/services" className="navlinkA" onClick={handleClose}>
                SERVICES
              </NavLink>
              <NavLink to="/main/recent-works" className="navlinkA" onClick={handleClose}>
                RECENT WORKS
              </NavLink>
              <NavLink to="/main/resume/skills" className="navlinkA" onClick={handleClose}>
                RESUME
              </NavLink>
              <NavLink to="/main/contacts" className="navlinkA" onClick={handleClose}>
                CONTACT
              </NavLink>

              <DarkModeToggle
                onChange={handleDarkMode}
                checked={isDarkModeActive}
                size={60}
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
                    to="mailto:abubakarsiddikl.info@gmail.com"
                    target="_blank"
                    className="contactIcon newIcon"
                  >
                    <BiLogoGmail />
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
