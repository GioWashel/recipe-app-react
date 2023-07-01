import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";

export const Home = () => {
  return (
    <div className="home">
      <SearchBar />
      <div className="links">
        <h3>Temporary Links for dev purposes</h3>

        <Link to="/">
          Home <span>You are here</span>
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">
          Profile <span>Assigned to coronel</span>
        </Link>
        <Link to="/details">
          Show Recipe in Detail <span>Assigned</span>
        </Link>
        <Link to="/explore">
          Explore Recipes <span>Unassigned</span>
        </Link>
        <Link to="/create">
          Create a New Recipe <span>Assigned, Not started</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
