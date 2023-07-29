import { useContext } from 'react';
import './Header.css';
import { mainContext } from '../../../contexts/UserContext';

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
            <h1>Header</h1>
            <button onClick={handleDarkMode}> Dark Mode </button>
        </div>
    );
};

export default Header;