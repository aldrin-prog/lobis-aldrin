import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext'; 
import { verifyToken } from '../services/api';

export function ProtectedRoute({ children }) {
    const [isUserAuthenticated,setIsUserAuthenticated]=useState(null);

    useEffect(()=>{
        const validateToken=async()=>{
            try {
                const isValidToken=await verifyToken();
                console.log(isValidToken);
                console.log("Here");
                setIsUserAuthenticated(isValidToken);
            } catch (error) {
                console.log(error);
            }
        }
        validateToken();
    },[])
    if (isUserAuthenticated === null) {
        return <div></div>; // Show a loader while validating the token
    }
    return isUserAuthenticated ? children  : <Navigate to="/" replace/>;
}
