import { Link } from "react-router-dom"
import { useEvent } from "../context/AppContext"

const Sidebar=()=>{
    const {loginUser}=useEvent();
    return (
        <aside className="w-64 hidden  md:block bg-neutral text-white">
        <div className="p-4  text-center font-bold text-lg border-b border-gray-700">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
              <img src={loginUser && loginUser.profileImage? loginUser.profileImage  : ""} />
            </div>
          </div>
          <div className="  ">
            <p className="text-sm">{`${loginUser.firstName} ${loginUser.lastName}`}</p>
          </div>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2">
            <li><Link to="/dashboard" className="block p-3 rounded hover:bg-gray-700">Dashboard</Link></li>
            <li><Link to="/profile" className="block p-3 rounded hover:bg-gray-700">Profile</Link></li>
            <li><Link to="/my-bookings" className="block p-3 rounded hover:bg-gray-700">My Bookings</Link></li>
            {/* <li><Link to="/attendees" className="block p-3 rounded hover:bg-gray-700">Attendees</Link></li> */}
            {/* <li><a href="#" className="block p-3 rounded hover:bg-gray-700">Settings</a></li>
            <li><a href="#" className="block p-3 rounded hover:bg-gray-700">Profile</a></li> */}
          </ul>
        </nav>
      </aside>
    )
}
export default Sidebar