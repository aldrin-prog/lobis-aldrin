import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "../components/Payment";
import { useEvent } from "../context/AppContext";
import EventLists from "../components/EventLists";
import Loading from "../components/Loading";

const Events = ({ onSelectEvent }) => {

  const {events,fetchEvents,verifyToken}=useEvent();
  useEffect(()=>{
    fetchEvents();
    verifyToken();
  },[])
  return (
    events ? <EventLists events={events}/> : <Loading/>
  )
};

export default Events;
