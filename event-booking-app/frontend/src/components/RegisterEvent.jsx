import { useEffect } from "react";
import { useEvent } from "../context/AppContext";
import { Link } from "react-router-dom";

const RegisterEvent = (props) => {
    const {event}=props
    const {loginUser,verifyToken,createBooking}=useEvent();
    const handleBookEvent=()=>{
        loginUser?swal({
            title: "Do you want to book this Event?",
            // text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: ["Cancel", "Yes"],
            dangerMode: false,
          })
          .then((willDelete) => {
            if (willDelete) {
              const bookEvent=async()=>{
                try {
                    const response=await createBooking(event._id);
                    console.log(response);
                    if(!response){
                       throw new Error("Something went wrong please try again") 
                    }
                    // swal({
                    //     title:"Successfully Booked the event",
                    //     text:"Do you want to proceed to payment?",
                    //     icon:"success",
                    //     buttons:["Cancel","Yes"]
                    // });
                } catch (error) {
                    swal(error.message,"","error");
                }
              }
              bookEvent();
            }
          }):swal("Please Login to your account!","","warning")
    }
    useEffect(()=>{
        verifyToken();
    },[])
    return (<>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button type="button" onClick={handleBookEvent} className="btn btn-primary mt-4" >Register Now</button>
    </>);
}
export default RegisterEvent;