import { useEffect, useState } from 'react'
import { PlusCircle, Edit, Trash, Eye } from 'lucide-react'
import AddForm from '../components/EventForm'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import { useEvent } from '../context/AppContext'
import Sidebar from '../components/Sidebar'
const MyBookings = () => {
    const {userEvents,getEventUser,deleteEvent,myBookings,getUserBookings}=useEvent();

    
    useEffect(()=>{
        getUserBookings();
    },[])
    return (
        <div className="p-4  w-full">
            <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
            <div className="overflow-x-auto border  w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Venue</th>
                            <th>Payment Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myBookings && myBookings.length>0? myBookings.map((booking)=>(
                            <tr>
                                <td>{booking.event.title}</td>
                                <td>{booking.event.date}</td>
                                <td>{`${booking.event.timeFrame.from}-${booking.event.timeFrame.to}`}</td>
                                <td>{booking.event.venue}</td>
                                <td>{booking.paymentStatus}</td>
                                <td>
                                    <Link to={`/events/${booking.event._id}`} className='btn btn-ghost btn-xs'>
                                        <Eye className='w-4 h-4'/>
                                    </Link>
                                </td>
                            </tr>
                        )): myBookings && myBookings.length<=0? 
                            <tr>
                                <td colSpan="6" className='text-center'>No Data</td>
                            </tr>
                          :<tr><td colSpan="6" className='text-center'>Loading</td></tr> }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyBookings