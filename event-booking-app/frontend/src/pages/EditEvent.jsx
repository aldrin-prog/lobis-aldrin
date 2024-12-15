import { useNavigate, useParams } from "react-router-dom";
import EventForm from "../components/EventForm"
import { useEffect, useState } from "react";
import { useEvent } from "../context/AppContext";

const EditEvent=()=>{
    const {id}=useParams();
    const navigate=useNavigate();
    const {event,updateEvent,getEvent,setEvent}=useEvent();
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            const response=await fetch(`http://127.0.0.1:5000/api/events/${id}`,{
                method:"PUT",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(event),
                credentials:"include",
            });
            const data=await response.json();
            // console.log(data);
            navigate("/admin/dashboard");
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getEvent(id);
        // const fetchEvent=async()=>{
        //     try {
        //         const response=await fetch(`http://127.0.0.1:5000/api/events/${id}`);
        //         const data=await response.json();
        //         setEvent(data);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // }
        // fetchEvent();
    },[])   
    return(
        <EventForm handleSubmit={handleSubmit} event={event} text="Edit An Event" setEvent={setEvent}/>
    );
}
export default EditEvent;