


import React, { useState, useEffect, useRef } from 'react'
import { FiHeart } from "react-icons/fi";
import { NavLink, useNavigate } from 'react-router-dom';
import "./styles/Navbar_style.css";

function Navbar() {
    const [user, setUser] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);
    const loginDropdownRef = useRef(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
            if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target)) {
                setLoginDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    const handleChangeUsername = () => {
        const newUsername = prompt("Enter new username:", user?.username);
        if (newUsername && newUsername.trim() !== "") {
            const updatedUser = { ...user, username: newUsername };
            setUser(updatedUser);
            localStorage.setItem("user", JSON.stringify(updatedUser));
            alert("Username updated successfully!");
        }
        setDropdownOpen(false);
    };

    const handleViewProfile = () => {
        navigate("/signin");
        setDropdownOpen(false);
    };

    // Get initials (first two characters of username)
    const getUserInitials = (username) => {
        if (!username) return "";
        return username.slice(0, 2).toUpperCase();
    };

    return (
        <>
            <div id="navbar">
                <div id="logo-name-div">
                    <div id="web-logo-img"></div>
                    <h1 id="web-head-name">SecondLife</h1>
                </div>

                <div id="nav-option-div">
                    <span id="heart-icon-div"><FiHeart className='heart-icon' /></span>
                    <span className='ser-log-ab-div'><NavLink to="/" className='NavLink'><h4>Home</h4></NavLink></span>
                    <span className='ser-log-ab-div'><NavLink to="/#" className='NavLink'><h4>Register</h4></NavLink></span>
                    <span className='ser-log-ab-div'><NavLink to="/About" className='NavLink'><h4>About</h4></NavLink></span>

                    {user ? (
                        <span
                            
                            style={{ position: "relative" }}
                            ref={dropdownRef}
                        >
                            {/* Circle with initials */}
                            <div
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                style={{
                                    cursor: "pointer",
                                    width: "35px",
                                    height: "35px",
                                    borderRadius: "50%",
                                    backgroundColor: "#004896",
                                    color:"white",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: "bold",
                                    fontSize: "16px",
                                    userSelect: "none",
                                }}
                                title={user.username}
                            >
                                {getUserInitials(user.username)}
                            </div>

                            {/* Dropdown */}
                            {dropdownOpen && (
                                <div style={{
                                    position: "absolute",
                                    top: "45px",
                                    right: "0",
                                    background: "#fff",
                                    border: "1px solid #ccc",
                                    borderRadius: "5px",
                                    boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
                                    padding: "10px",
                                    zIndex: 1000,
                                    minWidth: "160px"
                                }}>
                                    <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
                                        {user.username}
                                    </p>
                                    <p onClick={handleViewProfile} style={{ cursor: "pointer", margin: "5px 0" }}>
                                        View Profile
                                    </p>
                                    <p onClick={handleChangeUsername} style={{ cursor: "pointer", margin: "5px 0" }}>
                                        Change Username
                                    </p>
                                    <p onClick={handleLogout} style={{ cursor: "pointer", margin: "5px 0" }}>
                                        Logout
                                    </p>
                                </div>
                            )}
                        </span>
                    ) : (
                        <span
                            className='ser-log-ab-div'
                            style={{ position: "relative" }}
                            ref={loginDropdownRef}
                        >
                            <h4
                                onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
                                style={{ cursor: "pointer" }}
                            >
                                Login
                            </h4>
                            {loginDropdownOpen && (
                                <div style={{
                                    position: "absolute",
                                    top: "25px",
                                    right: "0",
                                    background: "#fff",
                                    border: "1px solid #ccc",
                                    borderRadius: "5px",
                                    boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
                                    padding: "10px",
                                    zIndex: 1000,
                                    minWidth: "160px"
                                }}>
                                    <p onClick={() => navigate("/login")} style={{ cursor: "pointer", margin: "5px 0" }}>
                                        User Login
                                    </p>
                                    <p onClick={() => navigate("/adminlogin")} style={{ cursor: "pointer", margin: "5px 0" }}>
                                        Admin Login
                                    </p>
                                </div>
                            )}
                        </span>
                    )}
                </div>
            </div>
        </>
    );
}

export default Navbar;








