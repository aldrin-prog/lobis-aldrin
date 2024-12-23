import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEvent } from "../context/AppContext";
import { Menu } from "lucide-react";
import NavList from "./NavList";
const AppNavbar = () => {
    // const [user,setUser]=useState();
  return (
    <div className="navbar z-50 fixed bg-base-100 shadow-lg">
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
        <NavList/>
      </ul>
        
      </div>
    </div>
  );
};
export default AppNavbar;
