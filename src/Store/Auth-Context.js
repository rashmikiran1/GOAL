import React, { useState } from "react";
import { useEffect } from "react";

const AuthContext = React.createContext ({
    isLoggedIn : false,
    onLogout: () => {},
    onLogin:(email,password) => {}
})
export const AuthContextProvider = (props) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    useEffect(() => {
        const StoreLoggrdInformation = localStorage.getItem('isLoggedIn')
        if(StoreLoggrdInformation==='1') {
            setIsLoggedIn(true)
        }
    },[]);
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false);
    }
    const loginHandler = () => {
        localStorage.setItem('isLoggedIn','1')
        setIsLoggedIn(true);
    }
    return <AuthContext.Provider
    value={{isLoggedIn:isLoggedIn,
        onLogout:logoutHandler }}
    >{props.children}</AuthContext.Provider>
}

export default AuthContext