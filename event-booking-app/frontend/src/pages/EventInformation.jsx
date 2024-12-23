import React, { useEffect } from 'react'
import { useEvent } from '../context/AppContext'
import { useParams } from 'react-router-dom';
import EventInfo from '../components/EventInfo';
const speakers  = [
  { name: "Alice Johnson", role: "AI Researcher", image: "/placeholder.svg?height=100&width=100" },
  { name: "Bob Smith", role: "Data Scientist", image: "/placeholder.svg?height=100&width=100" },
  { name: "Carol Williams", role: "UX Designer", image: "/placeholder.svg?height=100&width=100" },
]

const EventInformation=()=>{
  const {event,getEvent,verifyToken,booked,isEventBooked}=useEvent();
  const {id}=useParams();
  useEffect(()=>{
    const init=async()=>{
      await getEvent(id);
      await isEventBooked(id);
      await verifyToken();
    }
    init();
  },[]);
    return (
    event?<EventInfo event={event} booked={booked} /> : <p>Loading</p>
  )
}

export default EventInformation;