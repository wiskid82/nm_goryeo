import React from "react"

const Footer = () => {
    return (
        <footer>
            <div>
                <p>© {new Date().getFullYear()} Your Site Name. All rights reserved.</p>
                <p>Contact us at <a href="mailto:contact@example.com">contact@example.com</a>.</p>
            </div>
        </footer>
    )
}

export default Footer