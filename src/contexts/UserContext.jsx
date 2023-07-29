/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const mainContext= createContext()
const UserContext = ({children}) => {
    const [isDarkModeActive, setIsDarkModeActive]=useState(false)








    const authInfo={isDarkModeActive,setIsDarkModeActive}
    return (
        <mainContext.Provider value={authInfo}>
            {children}
        </mainContext.Provider>
    );
};

export default UserContext;




UserContext.propTypes = {
    children: PropTypes.node.isRequired,
};