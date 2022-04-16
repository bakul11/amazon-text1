import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Firebase/FirebaseConfig';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        return (
            <div className='text-center mt-5'>
                <p className='text-center mt-5'>loading...</p>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;
};

export default RequireAuth;