import React from 'react';
import { Outlet } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const PrivateRoute: React.FC = () => {
    return (
        <ProtectedRoute>
            <Outlet />
        </ProtectedRoute>
    );
};

export default PrivateRoute;
