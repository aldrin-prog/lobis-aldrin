import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEvent } from "../context/AppContext";
import { Menu } from "lucide-react";
const AppNavbar = () => {
    // const [user,setUser]=useState();
    const navigate=useNavigate();
    const {isAuthenticated,logoutUser,loginUser:user}=useEvent();
    const handleLogout =  () => {
      swal({
        title: "Are you sure?",
        text: "You are about to log out!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((isLogout) => {
        if (isLogout) {
          const processLogout=async()=>{
            await logoutUser();
            navigate('/');
          }
          processLogout();
        } 
      });
    }
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <div className={`flex-none lg:hidden`}>
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <Menu/>
              </label>
            </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          EventBooker
        </Link>
      </div>
      <div className="hidden flex-none lg:block">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/dashboard"><span>Welcome, {user.firstName}</span></Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default AppNavbar;
