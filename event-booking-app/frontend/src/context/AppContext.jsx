import React,{ createContext, useContext, useEffect, useState } from "react";
const AppContext=createContext();
const AppProvider=({children})=>{
    const BASE_URL=import.meta.env.VITE_BACKEND_API;
    const [events,setEvents]=useState(null);
    const [userEvents,setUserEvents]=useState(null);
    const [event,setEvent]=useState(null);
    const [loginUser,setLogInUser]=useState(null);
    const [isAuthenticated,setIsAuthenticated]=useState(null);
    const fetchEvents=async()=>{
        try {
            const response=await fetch(`${BASE_URL}/api/events`);
            const data=await response.json();
            setEvents(data);
        } catch (error) {
            console.log(error);
        }    
    }
    const deleteEvent=async (id)=>{
        try {
            const eventDeleted=await fetch(`${BASE_URL}/api/events/${id}`,{
                method:"DELETE",
                credentials:"include"
            })
            getEventUser();
        } catch (error) {
            console.log(error);
        }
    }
    const getEvent=async (id)=>{
        try {
            const response= await fetch(`${BASE_URL}/api/events/${id}`);
            const data=await response.json();
            setEvent(data);
        } catch (error) {
            console.log(error);
        }
    }
    const getEventUser=async()=>{
        try {
            const response=await fetch(`${BASE_URL}/api/user/events`,{
                method:"GET",
                credentials:"include"
            });
            const data=await response.json();
            console.log(data);
            setUserEvents(data);
        } catch (error) {
            console.log(error.message)
        }
    }
    const addNewEvent=async()=>{
        try {
            const response=await fetch(`${BASE_URL}/api/events`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                credentials:"include",
                body:JSON.stringify(event),
            });
            if(!response.ok){
                const errors=await response.json();
                return {res:false,errors:errors.message}
            }
            // const data=await response.json();
            // console.log(data);
        } catch (error) {
            return false;
        }
    }
    const registerUser=async(data)=>{
        try {
            const response=await fetch(`${BASE_URL}/api/auth/register`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            });
            const message=await response.json();
            return message
        } catch (error) {
            console.error(error);
        }
    }
    const login=async(email,password)=>{
        try {
            const response=await fetch(`${BASE_URL}/api/auth/login`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({email:email,password:password}),
                credentials:"include",
            });
            const data=await response.json();
            console.log(data);
            setLogInUser(data.user);
            setIsAuthenticated(true);
        } catch (error) {
            console.error(error);
        }
    }
    const logoutUser=async()=>{
        try {
            const response=await fetch(`${BASE_URL}/api/auth/logout`,{
                method:"POST",
                credentials:"include"
            });
            setLogInUser(null);
            setIsAuthenticated(null);
            setEvents(null);
            setEvent(null);
        } catch (error) {
            
        }
    }
    const updateEvent=async (formData,id)=>{
        try {
            const newEvent= await fetch(`${BASE_URL}/api/events/${id}`,{
                method:'PUT',
                body: JSON.stringify(formData),
                credentials:"include"
            })
            return newEvent ? true : false; 
        } catch (error) {
            console.log(error);
        }
    }
    const verifyToken=async()=>{
        try {
            const response=await fetch(`${BASE_URL}/api/auth/verify-token`,{
                method:"GET",
                credentials:"include"
            });
            if(response.status!=200){
                return false;
            }
            const userData=await response.json();
            setLogInUser(userData)
            // setIsAuthenticated(true);
            return true;
        } catch (error) {            
            return false;
        }
    }
    const createPaymentIntent=async()=>{
        try {
            
        } catch (error) {
            
        }
    }
    return (
        <AppContext.Provider value={{fetchEvents,addNewEvent,deleteEvent,
                                    getEvent,updateEvent,events,event,setEvent,
                                    isAuthenticated,setIsAuthenticated,getEventUser,
                                    login,verifyToken,logoutUser,loginUser,registerUser,userEvents
                                    }}>
            {children}
        </AppContext.Provider>
    )
}
const useEvent=()=>{
    return useContext(AppContext);
}
export {useEvent,AppProvider}