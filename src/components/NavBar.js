import React from "react";
import logo from "./logo.jpg";
import { Link } from "react-router-dom";
import "./NavBar.css";
export const NavBar = () => {
    return(
        <>
        <div className="navbar-container">
            <nav>
                <ul class="nav-links">
                    <li><Link to="/home" id="home-link" className="links">Home</Link> </li>
                    <li><Link to="/explore" id="explore-link" className="links">Explore</Link> </li>
                    <li> <Link to="/create" id="create-link" className="links">Create</Link></li>

                </ul>
            </nav>
        </div>
        </>
    );
}