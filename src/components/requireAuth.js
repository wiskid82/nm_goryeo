import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
// 사용안함
const requireAuth = (Component) => {
    return (props) => {
        useEffect(() => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/signin');
            }
        }, []);

        return <Component {...props} />;
    };
};

export default requireAuth;