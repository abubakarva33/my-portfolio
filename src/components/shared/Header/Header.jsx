import { useContext } from 'react';
import './Header.css';
import { mainContext } from '../../../contexts/UserContext';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';


const Header = () => {
    const { isDarkModeActive, setIsDarkModeActive } = useContext(mainContext);

    const handleDarkMode = () => {
        setIsDarkModeActive(!isDarkModeActive)
        const body = document.querySelector('body')
        if (!isDarkModeActive) {
            body.setAttribute('class', "darkTheme")
        } else {
            body.setAttribute('class', "lightTheme")
        }
    }


    return (
        <div className='header'>
            <Navbar expand='lg'>
                <NavLink to="/">My Portfolio</NavLink>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton className='navToggle'>
                        <img src="/Images/userImg2.webp" alt=""  />
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <NavLink to="/">HOME</NavLink>
                            <NavLink to="/services">SERVICES</NavLink>
                            <NavLink to="/recent-works">RECENT WORKS</NavLink>
                            <NavLink to="/resume">RESUME</NavLink>
                            <NavLink to="/pricing">MY PRICING</NavLink>
                            <NavLink to="/blogs">BLOGS</NavLink>
                            <NavLink to="/contacts">CONTACT</NavLink>
                        </Nav>
                        <Nav className="d-flex">
                            <button onClick={handleDarkMode} className='themeChangeBtn '>
                                <h6 className={`theme ${!isDarkModeActive ? 'bg-primary' : 'bg-secondary'}`} ><MdOutlineLightMode /> </h6>
                                <h6 className='theme2' ><MdOutlineDarkMode /> </h6>
                            </button>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
        </div>
    );
};

export default Header;