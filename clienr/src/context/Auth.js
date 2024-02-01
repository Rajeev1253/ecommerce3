import { useState,useContext,createContext,useEffect } from "react";
const AuthContext = createContext();

const AuthProvider = ({children})=>{
    const [auth,setAuth]=useState({
        users:null,
        token:""
    })
useEffect(()=>{
    const data = localStorage.getItem('auth');
    if(data){
        const parseData = JSON.parse(data);
        setAuth({
            ...auth,
            user:parseData.user,
            token:parseData.token
        })
    }


   
 //eslint-disable-next-line
},[])
    return(
        <AuthContext.Provider value={[auth,setAuth]}>
        {children}

        </AuthContext.Provider>
    )
}
const useAuth =()=> useContext(AuthContext,AuthProvider);
export {useAuth,AuthProvider}