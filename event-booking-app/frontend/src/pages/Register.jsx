import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useEvent } from "../context/AppContext";
import { useForm } from "react-hook-form";

const Register = () => {
    const {register,watch,handleSubmit,formState:{errors}}=useForm();
    const {registerUser} =useEvent();
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    });
    const handleChange=(e)=>{
            const {name,value}=e.target;
            setFormData(prev=>({...prev,[name]:value}));
        
    }
    const onSubmit=async(data)=>{
        // e.preventDefault();
        // console.log(data);
        try {
            const response=await registerUser(data);
            if(response.type=="error")
                throw new Error(response.message);
            navigate("/login");
        } catch (error) {
            console.error(error)
            swal(error.message,"","error");
        }
    }
    return (
        <div  style={{
            backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }} className="hero bg-base-200 min-h-screen">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="grid md:grid-cols-2 gap-x-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" {...register("firstName", { required: "First Name is required" })} 
                            className={`input input-bordered focus:outline-none focus:ring-inherit  ${errors.email && 'border border-red-500'}`} />
                            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" {...register("lastName", { required: "Last Name is required" })}  
                            className={`input input-bordered focus:outline-none  ${errors.lastName && 'border border-red-500'}`} />
                            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                        </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email",{required:"Email is required"})}  
                            className={`input input-bordered focus:outline-none  ${errors.email && 'border border-red-500'}`} />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password",{required:"Password is required",
                           
                            minLength:{value:6,message:"Password must be at least 6 characters"}})} 
                            className={`input input-bordered focus:outline-none  ${errors.password && 'border border-red-500'}`} />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" {...register("confirmPassword",{
                            validate:(value)=>{
                                if(!value)
                                    return "Confirm Password is required"
                                else if(value!==watch('password'))
                                    return "Password do not match"
                            }})} 
                            className={`input input-bordered focus:outline-none  ${errors.confirmPassword && 'border border-red-500'}`} />
                            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register