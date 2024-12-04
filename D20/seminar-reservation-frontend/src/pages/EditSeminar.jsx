import { useParams } from "react-router-dom";
import AppNavbar from "../components/AppNavbar"
import { useEffect, useState } from "react";
import EditFormSeminar from "../components/EditFormSeminar";
import { useAuth } from "../store/AuthContext";
const EditSeminar=()=>{
    const {login}=useAuth();
    const [seminar,setSeminar]=useState(null);
    const URL=import.meta.env.VITE_BACKEND_API;
    const {id}=useParams();
    useEffect(()=>{
        const fetchSeminar=async ()=>{
            try {
                const seminarData=await fetch(`${URL}/api/seminars/${id}`);
                const data=await seminarData.json();
                setSeminar(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchSeminar();
    },[])
    return (
        <div>
            <AppNavbar/>
            {
                seminar ? <EditFormSeminar seminar={seminar}/> : ""
            }
        </div>
    )
}
export default EditSeminar;