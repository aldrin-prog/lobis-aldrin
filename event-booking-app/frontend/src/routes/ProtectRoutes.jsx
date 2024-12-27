import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useEvent } from '../context/AppContext';
import Loading from '../components/Loading';

const ProtectRoutes = ({children}) => {
    const {isAuthenticated,loginUser, verifyToken} = useEvent();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const authStatus = await verifyToken();
            setLoading(false);  // Update loading state once token verification is done
        };
        checkAuth();
    }, []);

    if (loading) {
        return <Loading/>;  // Show loading state until authentication is verified
    }
//    console.log(user);
    return loginUser  ? children : <Navigate to="/login" />;
};

export default ProtectRoutes;
