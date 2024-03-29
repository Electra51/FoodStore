import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hook/useTitle';

const PrivateRoute = ({ children }) => {
    useTitle('PrivateRoute')

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <h1 className='text-5xl text-warning text-center'>Loading...</h1>
    }
    if (user) {
        return children;

    }

    return <Navigate to='/login' state={{ from: location.pathname }} replace></Navigate>
};

export default PrivateRoute;