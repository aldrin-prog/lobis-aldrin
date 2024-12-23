import Sidebar from "../components/Sidebar";
import AppNavbar from "../components/AppNavbar";
import Footer from "../components/Footer";
import ProtectRoutes from "../routes/ProtectRoutes";
import NavList from "../components/NavList";
import BottomNav from "../components/BottomNav";
import { useEffect } from "react";

const UserLayout = ({ children }) => {
  return (
    <>
      <ProtectRoutes>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            
            <AppNavbar />
            <div className="flex min-h-screen mt-[68px]">
              <Sidebar/>
            {children}
            </div>
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-80 px-4 pt-[100px]">
              <NavList />
            </ul>
          </div>
        </div>
        <BottomNav/>
        <Footer />
      </ProtectRoutes>
      {/* <ProtectRoutes>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="w-full">
            <AppNavbar />
            {children}
          </div>
        </div>
        <Footer />
      </ProtectRoutes> */}
    </>
  );
};
export default UserLayout;
