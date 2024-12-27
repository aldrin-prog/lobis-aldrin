import { useEffect, useState } from "react";
import { ArrowRight, Calendar, MapPin, Search } from "lucide-react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "../components/Payment";
import { useEvent } from "../context/AppContext";

const EventLists = (props) => {
    const { events } = props;

    const stripePromise = loadStripe(
        "pk_test_51LYkFeLPBjJQ7pxjvBGr4JBVYbCqPACcVKi8lPRNITzXdlZguuXnTMv0fL5lwVIpny4Ivz0XRmDxjbCc94q5Jao800gZ6aLUH0"
    );
    return (
        <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {events.map((event) => (
                    <div key={event._id} className="card shadow-lg">
                        <div className="card-body" >
                            <h3 className="card-title">{event.name}</h3>
                            <p className="text-sm text-gray-600">
                                <span className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {event.date}
                                </span>
                            </p>
                            <p className="text-sm text-gray-600 mt-2">
                                <span className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    {event.venue}
                                </span>
                            </p>
                        </div>
                        <div className="card-actions justify-end p-4">
                            <a href={`/events/${event._id}`} className="btn btn-outline">
                                Learn More
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                        </div>
                    </div>
                    // <div key={event._id} className="card bg-base-100 shadow-xl">
                    //   <div className="card-body">
                    //     <h2 className="card-title">{event.name}</h2>
                    //     <p>Date: {event.date}</p>
                    //     <p>Time: {`${event.timeFrame.from} - ${event.timeFrame.to}`}</p>
                    //     <p>Venue: {event.venue}</p>
                    //     <div className="card-actions justify-end">
                    //       {/* Open the modal using document.getElementById('ID').showModal() method */}
                    //       <button
                    //         className="btn btn-primary"
                    //         onClick={() =>
                    //           document.getElementById("my_modal_2").showModal()
                    //         }
                    //       >
                    //         Book
                    //       </button>
                    //       <dialog id="my_modal_2" className="modal">
                    //         <div className="modal-box p-0">
                    //           <Elements stripe={stripePromise} className="end">
                    //             <Payment />
                    //           </Elements>
                    //         </div>
                    //         <form method="dialog" className="modal-backdrop">
                    //           <button>close</button>
                    //         </form>
                    //       </dialog>
                    //     </div>
                    //   </div>
                    // </div>
                ))}
            </div>
        </div>
    )
}
export default EventLists