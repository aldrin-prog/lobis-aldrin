import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../services/api";
const SignUp=()=>{
    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })
    const navigate=useNavigate();
    const handleInputChange=(e)=>{
        const {value,name}=e.target;
        setFormData((prev)=>({...prev,[name]:value}));
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const isUserCreated=await createUser(formData);
        if(isUserCreated){
            navigate('/');
        }
    }
    return(<div>

        <div className="card shadow-xl w-96 m-auto mt-5">
            <p className="card-header text-center mt-5 text-lg ">Create An Account</p>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <label className="input mb-2 input-bordered flex items-center gap-2">
                        First Name
                        <input onChange={handleInputChange} name="firstName" type="text" className="grow"/>
                    </label>
                    <label className="input mb-2 input-bordered flex items-center gap-2">
                        Last Name
                        <input onChange={handleInputChange} name="lastName" type="text" className="grow"/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-2">
                        Email
                        <input onChange={handleInputChange} type="text" name="email" className="grow"/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Password
                        <input name="password" onChange={handleInputChange} type="password" className="grow"/>
                    </label>
                    <button type="submit" className="btn btn-primary btn-sm mt-5">Sign up</button>
                    <p className="mt-2">Already have an Account? <Link className=" underline text-blue-500 " to={'/'}>Sign In</Link></p>
                </form>
            </div>
        </div>
    </div>);
}
export default SignUp;