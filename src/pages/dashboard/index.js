// src/pages/dashboard/index.js
import React from "react"
import Layout from "../../components/layout/Layout"
import useAuth from "../../hooks/useAuth"
const DashboardPage = () => {
    useAuth();
    return (
        <Layout>
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard.</p>
        </Layout>
    )
}

export default DashboardPage
