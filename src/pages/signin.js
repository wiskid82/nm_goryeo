import React, {useState} from "react"
import {graphql, navigate} from "gatsby";

const SigninPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        // 백엔드 서버로 요청
        const response = await fetch('http://localhost:1100/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        // JWT를 로컬 스토리지나 쿠키에 저장
        localStorage.setItem('token', data.accessToken);
        navigate("/dashboard/");
    };

    const handleJoinSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:1100/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                console.log('User registered successfully');
            } else {
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div>
            <h1>signin</h1>
            <form onSubmit={handleLoginSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                       placeholder="Password"/>
                <button type="submit">Login</button>
            </form>
            <form onSubmit={handleJoinSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                       placeholder="Password"/>
                <button type="submit">join</button>
            </form>
        </div>
    )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default SigninPage
