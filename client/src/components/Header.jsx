import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserLoggedIn(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logoutHandler = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/logout", {
        withCredentials: true,
      });
      if (res.data.success) {
        localStorage.removeItem("token");
        setUserLoggedIn(false);
        navigate("/login");
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Error during logout");
    }
  };

  return (
    <nav className="jobnavbar">
      <div className="logo">
        <NavLink to="/home">
          <h1 className="text-2xl font-bold text-center">
            📚 Leitner Flashcard System
          </h1>
        </NavLink>
      </div>

      {/* Hamburger Menu for small screens */}
      <div className="jobhamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navbar Links */}
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        {!userLoggedIn ? (
          <>
            <NavLink to="/register">
              <button className="nav-button">Sign Up</button>
            </NavLink>
            <NavLink to="/login">
              <button className="nav-button">Login</button>
            </NavLink>
          </>
        ) : (
          <button onClick={logoutHandler} className="nav-button">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
