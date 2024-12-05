import React, { createContext, useContext, useEffect, useState } from 'react';
import { verifyToken } from '../services/api';
const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const login=async ()=>{
        try {
            const isValidToken=await verifyToken();
            // console.log(isValidToken);
            setIsAuthenticated(isValidToken);
        } catch (error) {
            console.log(error);
        }
    }
    const logout = () => setIsAuthenticated(false);
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
