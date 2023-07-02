import React from "react";
import logo from "./first-color-logo.png";
import { Link } from "react-router-dom";
import "./NavBar.css";
export const NavBar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
          <img id="logo" src={logo} alt="logo" />
        </div>
        <nav>
          <ul class="nav-links">
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
      </div>
    </>
  );
};
