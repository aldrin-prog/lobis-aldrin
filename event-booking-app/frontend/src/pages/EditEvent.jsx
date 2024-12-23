import { useNavigate, useParams } from "react-router-dom";
import EventForm from "../components/EventForm"
import { useEffect, useState } from "react";
import { useEvent } from "../context/AppContext";

const EditEvent=()=>{
    const {id}=useParams();
    const navigate=useNavigate();
    const {event,updateEvent,getEvent,setEvent}=useEvent();
    const [isProcessing, setIsProcessing] = useState(false);
    const handleSubmit=async (e)=>{
        e.preventDefault();
        swal({
            title: 'Processing...',
            text: 'Please wait while your data is being processed.',
            buttons: false, // Disable buttons
            closeOnClickOutside: false,
        });
        setIsProcessing(true);
        try {
            const response=await updateEvent(event,id);
            if(!response)
                throw  new Error("Server Error");
            swal("Successfully updated the Event","","success");
            navigate("/dashboard");
        } catch (error) {
            swal("Something happened please try again!","","error");
            // console.log(error);
        }finally{
            setIsProcessing(false);
        }
    }
    useEffect(()=>{
        getEvent(id);
    },[])   
    return(
        <EventForm handleSubmit={handleSubmit} action="update" event={event} text="Edit An Event" setEvent={setEvent}/>
    );
}
export default EditEvent;