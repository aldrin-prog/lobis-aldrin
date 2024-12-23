import AppNavbar from "../components/AppNavbar"
import Footer from "../components/Footer";
import ProtectRoutes from "../routes/ProtectRoutes";
import NavList from "../components/NavList";
import { useEvent } from "../context/AppContext";
import { useEffect } from "react";
const MainLayout = ({ children }) => {
    const {verifyToken}=useEvent();
    useEffect(()=>{verifyToken()},[]);
    return (
        <>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <AppNavbar />
                    <div className="min-h-screen  mt-[68px]">
                    {children}
                    </div>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-3"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu bg-base-200 min-h-full w-80 px-4 pt-24">
                        <NavList />
                    </ul>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default MainLayout;