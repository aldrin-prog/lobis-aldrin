import { useEffect, useState } from "react";
import AddForm from "../components/EventForm";
import { useNavigate } from "react-router-dom";
import { useEvent } from "../context/AppContext";
import swal from "sweetalert";
const AddEvent=()=>{
    const navigate=useNavigate();
    const {event,addNewEvent,setEvent}=useEvent();
    const [isProcessing, setIsProcessing] = useState(false);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        swal({
            title: 'Processing...',
            text: 'Please wait while your data is being processed.',
            buttons: false, // Disable buttons
            closeOnClickOutside: false,
          });
      
        setIsProcessing(true);
        try {
            const res=await addNewEvent();
            if(!res)
                throw  new Error("Server Error");
            swal("Successfully Added new Event","","success");
            navigate("/dashboard");
        } catch (error) {
            
            swal("Something happened please try again!","","error");
            
        }finally{
            setIsProcessing(false);
        }

    }
    useEffect(()=>{
        setEvent({
            "title": "",
            "tags": "",
            "description": "",
            "date": "",
            "timeFrame": {
                "from": "",
                "to": ""
            },
            "venue": "",
            "fee": 0,
            "slotsAvailable": 0
        }
        )
    },[])
    return(
        <AddForm handleSubmit={handleSubmit} action="create" text="Create An Event" event={event} setEvent={setEvent}/>
    );
}
export default AddEvent;