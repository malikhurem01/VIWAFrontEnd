// src/components/Header.js
import React, { useContext, useState } from "react";
import "./Header.css";
import viwaLogo from "../images/logo-long.png";
import SignUpPopup from "./SignUpPopup";
import LoginPopup from "./LoginPopup";
import Project from "./Project";
import ViwaContext from "../Store/context-api";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { user } = useContext(ViwaContext);
  const toggleSignUpPopup = () => {
    setIsSignUpOpen(!isSignUpOpen);
    setIsLoginOpen(false);
  };

  const toggleLoginPopup = () => {
    setIsLoginOpen(!isLoginOpen);
    setIsSignUpOpen(false);
  };
  const [isProjectPopupOpen, setIsProjectPopupOpen] = useState(false);
  const [projects, setProjects] = useState(["Project 1", "Project 2"]);
  const handleCreateProject = (projectName) => {
    setProjects([...projects, projectName]);
  };
  const handleCloseProjectPopup = () => {
    setIsProjectPopupOpen(false);
  };

  const handleGeneratePdf = (projectName) => {
    console.log(`Generating PDF for ${projectName}`);
    // Implement PDF generation logic here
  };

  return (
    <header className="header">
      <div className="logo">
        <img className="logo-image" src={viwaLogo} alt="VIWA Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          {user && (
            <li>
              <a href="/projects">Projects</a>
            </li>
          )}
          {user && (
            <li>
              <a
                href="/"
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
              >
                Log out
              </a>
            </li>
          )}
        </ul>
      </nav>
      {!user && (
        <button className="login-signup-button" onClick={toggleLoginPopup}>
          Login
        </button>
      )}
      <button className="start-button">Try for free</button>
      {isSignUpOpen && (
        <SignUpPopup
          closePopup={toggleSignUpPopup}
          openLoginPopup={toggleLoginPopup}
        />
      )}
      {isLoginOpen && (
        <LoginPopup
          closePopup={toggleLoginPopup}
          openSignUpPopup={toggleSignUpPopup}
        />
      )}
      {isProjectPopupOpen && (
        <Project
          projects={projects}
          onCreateProject={handleCreateProject}
          onGeneratePdf={handleGeneratePdf}
          onClose={handleCloseProjectPopup}
        />
      )}
    </header>
  );
};

export default Header;
