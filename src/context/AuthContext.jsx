import { createContext,useState,useEffect, Children, use } from "react";
import { getLoggedInUser } from "../utils/Storage";
import { logoutUser } from "../utils/Storage";
import { saveUserData } from "../utils/Storage";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({Children})=>{
    const [user,setUser]= useState(null);

    useEffect(()=>{
        const loggedInUser = getLoggedInUser();
        if(loggedInUser){
            setUser(loggedInUser);
        }
    }, []);
        const login = (us)
    const logout = () => {
        logoutUser();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, logout }}>
            {Children}
        </AuthContext.Provider>
    );
};