import React,{ createContext, useContext, useState } from "react";
const URL=import.meta.env.VITE_BACKEND_API
const SeminarContext=createContext();
const SeminarProvider=({children})=>{
    const [seminars,setSeminars]=useState([]);
    const fetchSeminars=async()=>{
        try {
            const response=await fetch(`${URL}/api/seminars`);
            const data=await response.json();
            setSeminars(data);
        } catch (error) {
            console.log(error);
        }    
    }
    return (
        <SeminarContext.Provider value={{fetchSeminars,seminars}}>
            {children}
        </SeminarContext.Provider>
    )
}
const useSeminar=()=>{
    return useContext(SeminarContext);
}
export {useSeminar,SeminarProvider}