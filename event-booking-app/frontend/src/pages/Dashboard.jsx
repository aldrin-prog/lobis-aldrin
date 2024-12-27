import { useEffect, useState } from 'react'
import { PlusCircle, Edit, Trash, Eye } from 'lucide-react'
import AddForm from '../components/EventForm'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import { useEvent } from '../context/AppContext'
import Sidebar from '../components/Sidebar'
const Dashboard = () => {
    const {userEvents,getEventUser,deleteEvent}=useEvent();

    const handleDeleteEvent = (eventId) => {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this item!",
          icon: "warning",
          buttons: ["Cancel", "Delete"],
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            const processDelete=async()=>{
                try {
                    await deleteEvent(eventId);
                    swal("Deleted!", "Your item has been deleted.", "success");
                } catch (error) {
                    swal("Warning!","Something went wrong during request","warning");
                }
            }
            processDelete();
          } else {
            swal("Your item is safe!");
          }
        });
    };

    useEffect(()=>{
        getEventUser();
    },[])
    return (
        <div className="p-4  w-full">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <a href="/create-event" className="btn btn-primary mb-4" >
                <PlusCircle className="mr-2 " /> Add New Event
            </a>
            <div className="overflow-x-auto border  w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Venue</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        { userEvents && userEvents.length>0 ?  userEvents.map(event => (
                            <tr key={event._id}>
                                <td>{event.title}</td>
                                <td>{event.date}</td>
                                <td>{event.timeFrame["from"]+'-'+event.timeFrame["to"]}</td>
                                <td>{event.venue}</td>
                                <td>
                                    <a  href={`/edit-event/${event._id}`} className="btn btn-ghost btn-xs" >
                                        <Edit className="w-4 h-4" />
                                    </a>
                                    <a href={`/events/${event._id}`} className='btn btn-ghost btn-xs'>
                                        <Eye className='w-4 h-4'/>
                                    </a>
                                    <button className="btn btn-ghost btn-xs" onClick={() => handleDeleteEvent(event._id)}>
                                        <Trash className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        )) : userEvents && userEvents.length<=0 ? <tr><td colSpan={5} className='text-center'>No data</td></tr> : <tr><td colSpan={5} className='text-center'>Loading</td></tr> }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard