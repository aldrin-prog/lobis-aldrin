import React,{ createContext, useContext, useEffect, useState } from "react";
const AppContext=createContext();
const AppProvider=({children})=>{
    const BASE_URL=import.meta.env.VITE_BACKEND_API;
    const STRIPE_KEY=import.meta.env.VITE_STRIPE_KEY;
    const [events,setEvents]=useState(null);
    const [userEvents,setUserEvents]=useState(null);
    const [event,setEvent]=useState(null);
    const [loginUser,setLogInUser]=useState(null);
    const [isAuthenticated,setIsAuthenticated]=useState(null);
    const [myBookings,setMyBookings]=useState(null);
    const [booked,setBooked]=useState(null);
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
            const response= await fetch(`${BASE_URL}/api/events/${id}`,{
                method:"GET",
                credentials:"include"
            });
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
            const data = new FormData();
            Object.entries(event).forEach(([key, value]) => {
                if(key==='timeFrame'){
                    value=JSON.stringify({from:value.from,to:value.to})
                }
                data.append(key, value);
            });
            const newEvent= await fetch(`${BASE_URL}/api/events`,{
                method:'POST',
                body:data,
                credentials:"include",

            })
            if(!newEvent.ok)
                throw new Error("Error while adding event");
            return true;
            // return newEvent ? true : false; 
        } catch (error) {
            console.log(error.message);
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
    const createBooking=async (id)=>{
        try {
            const response=await fetch(`${BASE_URL}/api/events/${id}/create-booking`,
                {
                    credentials:"include",
                    method:"POST",
                    body: JSON.stringify(event)
                }
            );
            const data=await response.json();
            console.log(data);
            if(!response.ok)
                throw new Error(false)
            setBooked(data.booking);
            return  data;
        } catch (error) {
            setBooked(null)
            return false;
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
            setMyBookings(null)
            setEvent(null);
        } catch (error) {
            
        }
    }
    const updateUserProfile=async (formData)=>{
        try {
            const response=await fetch(`${BASE_URL}/api/user/update-profile`,{
                method:"PUT",
                credentials:"include",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(formData)
            });
            if(!response.ok)
                throw new Error("Server Error");
            const data=await response.json();
            console.log(data);
            setLogInUser(data);
            return true;
        } catch (error) {
            return false
        }
    }
    const uploadUserImage=async(formData)=>{
        try {
            const response=await fetch(`${BASE_URL}/api/user/update-profile-image`,{
                method:"POST",
                credentials:"include",
                body:formData
            })
            if(!response.ok)
                throw new Error("Error uploading image");
            const data=await response.json();
            return data;
        } catch (error) {
            return false;
        }
    }
    const updateEvent=async (formData,id)=>{
        try {
            const data = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                if(key==='timeFrame'){
                    value=JSON.stringify({from:value.from,to:value.to})
                }
                data.append(key, value);
            });
            const response= await fetch(`${BASE_URL}/api/events/${id}`,{
                method:'PUT',
                body:data,
                credentials:"include",
            })
            if(!response.ok)
                throw new Error("Something went wrong");
            const res_data=await response.json();
            return res_data;
        } catch (error) {
            return false;
        }
    }
    const getUserBookings=async()=>{
        try {
            const response=await fetch(`${BASE_URL}/api/user/bookings`,{
                method:"GET",
                credentials:"include"
            })
            const data=await response.json();
            console.log(data)
            setMyBookings(data);
            return true;
        } catch (error) {
            return false;
        }
    }
    const isEventBooked=async(id)=>{
        try {
            const response= await fetch(`${BASE_URL}/api/bookings/get-user-event-booking`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                credentials:"include",
                body:JSON.stringify({eventId:id})
            });
            if(!response.ok){
                
                throw new Error("Unknown Error")
            }
            const data=await response.json();
            console.log(data);
            setBooked(data);
            return data;
        } catch (error) {
            console.log(error);
            setBooked(null);
            return false;
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
    const createPaymentIntent=async(id)=>{
        try {
            const response= await fetch(`${BASE_URL}/api/bookings/${booked._id}/process-payment`,{
                method:"POST",
                credentials:"include",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({amount:event.fee})
            })
            if(!response.ok)
                return false;
            const data=response.json();
            return data;
        } catch (error) {
            console.error(error.message);
            return false;
        }
    }
    const updateBookingPaymentStatus=async(id)=>{
        try {
            const response=await fetch(`${BASE_URL}/api/bookings/${id}/update-payment-status`,{
                method:"PUT",
                credentials:"include",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({paymentStatus:"confirmed"})
            })
            if(!response.ok)
                throw new Error("Error updating status");
            const data= await response.json()
            setBooked(data.booking);
            return data;
        } catch (error) {
            setBooked(null);
            return false;
        }
    }
    return (
        <AppContext.Provider value={{fetchEvents,addNewEvent,deleteEvent,
                                    getEvent,updateEvent,events,event,setEvent,
                                    isAuthenticated,setIsAuthenticated,getEventUser,updateUserProfile,
                                    login,verifyToken,logoutUser,loginUser,registerUser,userEvents,createPaymentIntent,
                                    uploadUserImage,createBooking,getUserBookings,myBookings,STRIPE_KEY,updateBookingPaymentStatus,
                                    booked,isEventBooked
                                    }}>
            {children}
        </AppContext.Provider>
    )
}
const useEvent=()=>{
    return useContext(AppContext);
}
export {useEvent,AppProvider}