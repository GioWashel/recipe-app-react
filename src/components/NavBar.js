import React from "react";
import logo from "./first-color-logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { Login } from "../pages/Login";


export const NavBar = ({authenticated}) => {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/home');
  };
  
  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
          <img id="logo" src={logo} alt="logo" />
        </div>
        <div className="container-input">
          <input type="text" placeholder="Search" name="text" className="input" />
          <svg
            fill="#ae6d1b" /* --tigers-eye */
            width="20px"
            height="20px"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>

        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/home" id="home-link" className="links">
                Home
              </Link>{" "}
            </li>
            <li>
              <Link to="/explore" id="explore-link" className="links">
                Explore
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/create" id="create-link" className="links">
                Create
              </Link>
            </li>
          </ul>
        </nav>

        
        {authenticated && <button className="logout-button" onClick={logout}>logout</button>}
        
      
      </div>
    </>
  );
};
