import { useEffect } from 'react';
import { navigate } from 'gatsby';

const useAuth = () => {
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/signin');
        }
    }, []);

    // 추가적인 인증 관련 로직
};

export default useAuth;