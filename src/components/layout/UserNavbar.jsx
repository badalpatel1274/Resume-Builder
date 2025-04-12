import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../image/logox.png";
import "../css/userNavbar.css";

const UserNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [role, setRole] = useState(localStorage.getItem("role"));
    const navigate = useNavigate();

    useEffect(() => {
        const updateNavbar = () => setRole(localStorage.getItem("role"));
        window.addEventListener("roleChange", updateNavbar);
        return () => window.removeEventListener("roleChange", updateNavbar);
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        setRole(null);
        window.dispatchEvent(new Event("roleChange"));
        navigate("/login");
    };

    return (
        <>
            <nav className="navbar">
                <img className="navbar-logo" src={logo} alt="Logo" style={{ width: "120px" }} />

                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <div className={`bar ${isOpen ? "open" : ""}`}></div>
                    <div className={`bar ${isOpen ? "open" : ""}`}></div>
                    <div className={`bar ${isOpen ? "open" : ""}`}></div>
                </div>

                <ul className={`navbar-menu ${isOpen ? "menu-open" : ""}`}>
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>

                    <li className="navbar-item">
                        <Link to="/admin" className="navbar-link" onClick={() => setIsOpen(false)}>Admin</Link>
                    </li>

                    {role ? (
                        <>
                            <li className="navbar-item">
                                <Link to="/user/account/dashboard" className="navbar-link" onClick={() => setIsOpen(false)}>
                                    My Account
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/login" className="navbar-link" onClick={handleLogout}>Logout</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="navbar-item">
                                <Link to="/login" className="navbar-link" onClick={() => setIsOpen(false)}>Login</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/signup" className="navbar-link" onClick={() => setIsOpen(false)}>Signup</Link>
                            </li>
                        </>
                    )}

                </ul>
            </nav>

            <div className={`content-wrapper ${isOpen ? "content-shift" : ""}`} onClick={() => setIsOpen(false)}></div>
        </>
    );
};

export default UserNavbar;
