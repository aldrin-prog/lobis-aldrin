import AppNavbar from "../components/AppNavbar"
import Footer from "../components/Footer";
import ProtectRoutes from "../routes/ProtectRoutes";

const MainLayout=({children})=>{
    return (
        <>
            <AppNavbar/>
            {children}
            <Footer/>
        </>
    )
}
export default MainLayout;