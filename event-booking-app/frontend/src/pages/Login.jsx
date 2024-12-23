import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useEvent } from "../context/AppContext";

const Login = () => {
    const {login,loginUser,isAuthenticated} =useEvent();
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleLogin=async(e)=>{
        e.preventDefault();
        try {
            await login(email,password)
            // console.log(loginUser)
            navigate("/dashboard");
        } catch (error) {
            
        }
    }
    return (
        <div  style={{
            backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }} className="hero bg-base-200 min-h-screen">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" onChange={(e)=>setEmail(e.target.value)} defaultValue={email} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" onChange={(e)=>setPassword(e.target.value)} defaultValue={password} placeholder="password" className="input input-bordered" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                            <label className="label">
                                <Link to="/register" className="label-text-alt">Create An Account</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login