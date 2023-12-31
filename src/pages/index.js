import React, { useEffect } from "react"
import { navigate } from "gatsby"

const IndexPage = () => {
    localStorage.setItem('token', '');
    useEffect(() => {
        // 사용자 인증 상태 확인 (예: 로컬 스토리지에 저장된 토큰으로 확인)
        const isAuthenticated = localStorage.getItem("token") !== null;
        if (!isAuthenticated) {
            navigate("/signin/");
        }
        else {
            navigate("/dashboard/");
        }
    }, []);

    return (
        <div>
            <h1>Welcome to Gatsby!</h1>
            <p>Loading...</p>
        </div>
    )
}

export default IndexPage
