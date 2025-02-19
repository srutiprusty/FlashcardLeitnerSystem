/* import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";

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
      const res = await axios.get("http://localhost:5001/api/logout", {
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
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/home">
          <h1 className="text-2xl font-bold text-center">
            📚 Leitner Flashcard System
          </h1>
        </NavLink>
      </div>

      {/* Hamburger Menu for small screens 
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navbar Links 
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        {!userLoggedIn ? (
          <>
            <NavLink to="/register">
              <Button className="nav-button" variant="contained">
                Sign Up
              </Button>
            </NavLink>
            <NavLink to="/login">
              <Button className="nav-button" variant="outlined">
                Login
              </Button>
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
 */

import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../App.css"; // Ensure you have a separate CSS file for styling
import Flashcard from "./../../../server/models/Flashcard";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserLoggedIn(true);
    }
  }, []);

  // Toggle Menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle Logout
  const logoutHandler = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/logout", {
        withCredentials: true,
      });
      if (res.data.success) {
        localStorage.removeItem("token");
        setUserLoggedIn(false);
        setIsOpen(false); // Close menu on mobile after logout
        navigate("/login");
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Error during logout");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <h1 className="logo">📚 LeitnerFlashy</h1>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </div>

        {/* Navbar Links */}
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          {!userLoggedIn ? (
            <>
              <NavLink to="/register" onClick={() => setIsOpen(false)}>
                <Button variant="contained" className="nav-button">
                  Sign Up
                </Button>
              </NavLink>
              <NavLink to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outlined" className="nav-button">
                  Login
                </Button>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/flashcards">
                <Button variant="text" className="nav-button">
                  Flashcards
                </Button>
              </NavLink>
              <Button
                variant="contained"
                color="error"
                onClick={logoutHandler}
                className="nav-button"
              >
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
