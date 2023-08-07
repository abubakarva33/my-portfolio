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
                {/* <NavLink to="/">My Portfolio</NavLink> */}
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="end"
                    className=' ms-auto'
                >
                    <Offcanvas.Header closeButton className='navToggle'>
                        <img src="/Images/userImg2.webp" alt="" />
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <NavLink to="/" className="navlinkA">HOME</NavLink>
                            <NavLink to="/services" className="navlinkA">SERVICES</NavLink>
                            <NavLink to="/recent-works" className="navlinkA">RECENT WORKS</NavLink>
                            <NavLink to="/resume/skills" className="navlinkA">RESUME</NavLink>
                            <NavLink to="/blogs" className="navlinkA">BLOGS</NavLink>
                            <NavLink to="/contacts" className="navlinkA">CONTACT</NavLink>
                            {isDarkModeActive === true ?
                                <h6 onClick={handleDarkMode} className="navlinkA">Switch
                                    <span> < MdOutlineLightMode /></span>
                                </h6> :
                                <h6 onClick={handleDarkMode} className="navlinkA"> Switch <span><MdOutlineDarkMode /></span> </h6>
                            }
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
        </div>
    );
};

export default Header;