import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext";

const Login=()=>{
    const {login}=useAuth();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const loginUser=await fetch("http://127.0.0.1:5000/api/auth/login",{
                headers: {
                    "Content-Type": "application/json"
                },
                method:"POST",
                body: JSON.stringify({email:email,password:password})
            });
            const data= await loginUser.json();
            localStorage.setItem("token",data.token);
            login();
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div className="card m-auto mt-10 bg-dark-300 card-compact bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title m-auto">Login</h2>
                <form onSubmit={handleSubmit}>
                    <label className="input mb-3 input-bordered flex items-center gap-2">
                        Email
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" name="email" className="grow" placeholder="" />
                    </label>
                    <label className="input mb-3 input-bordered flex items-center gap-2">
                        Password
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password"  className="grow" placeholder="" />
                    </label>
                    <button className="btn btn-sm w-full btn-primary d-block" type="Submit">Login</button>
                    <p className="mt-2">Dont have an Account? <Link to="/sign-up" className="underline text-blue-500">Sign up</Link></p>
                </form>
            </div>
        </div>
    )
}
export default Login;