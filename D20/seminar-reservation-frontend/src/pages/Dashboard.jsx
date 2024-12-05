import { useEffect, useState } from "react";
import AppNavbar from "../components/AppNavbar";
import SeminarCard from "../components/SeminarCard";
import { fetchSeminars,verifyToken } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext";
import { useSeminar } from "../store/SeminarContext";
const Dashboard=()=>{
    const {seminars,fetchSeminars}=useSeminar();
    useEffect(()=>{
        fetchSeminars();
    },[])
    return (
        <div>
            <a href="/add-seminar" className="btn btn-primary ml-3 btn-sm">Add seminar</a>
            <div className="grid gap-4 grid-cols-3 p-5">
                {
                    seminars.map((item,index)=>
                        (
                            <SeminarCard key={index} seminar={item}/>
                        )    
                    )
                }
                
            </div>
        </div>
    )
}
export default Dashboard;