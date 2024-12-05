import AppNavbar from "../components/AppNavbar";

const Layout=({children})=>{
    return (
        <div>
            <AppNavbar/>
            {children}
        </div>
    );
}
export default Layout;