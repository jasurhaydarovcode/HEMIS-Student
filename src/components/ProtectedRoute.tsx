import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    // Redirect to login if not authenticated
    return isAuthenticated ? <>{children}</> : <Navigate to="/dashboard/login" replace />;
};

export default ProtectedRoute;
