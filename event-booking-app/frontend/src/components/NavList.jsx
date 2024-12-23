import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useEvent } from "../context/AppContext";

const NavList = () => {
    const navigate = useNavigate();
    const { isAuthenticated, logoutUser, loginUser } = useEvent();
    const handleLogout = () => {
        swal({
            title: "Are you sure?",
            text: "You are about to log out!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((isLogout) => {
                if (isLogout) {
                    const processLogout = async () => {
                        await logoutUser();
                        navigate('/');
                    }
                    processLogout();
                }
            });
    }
    return (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/events">Events</Link>
            </li>
            {loginUser ? (
                <>
                    <li>
                        <Link to="/dashboard"><span>Welcome, {loginUser.firstName}</span></Link>
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
        </>
    )
}
export default NavList;