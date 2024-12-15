import { useState } from "react";
import AddForm from "../components/EventForm";
import { useNavigate } from "react-router-dom";
import { useEvent } from "../context/AppContext";

const AddEvent=()=>{
    const navigate=useNavigate();
    const {event,addNewEvent,setEvent}=useEvent();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const res=await addNewEvent();
            console.log(res);
        } catch (error) {
            console.log(error);
        }

    }
    return(
        <AddForm handleSubmit={handleSubmit} text="Create An Event" event={event} setEvent={setEvent}/>
    );
}
export default AddEvent;