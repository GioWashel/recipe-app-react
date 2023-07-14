import React from "react";
import "./HomePage.css";
import { Login } from "./Login";

import { SearchBar } from "./SearchBar";
import { Welcome } from "../components/Welcome";
export const Home = ({authenticated}) => {
  return (
    <div className="home">
      <div className="intro">
        <h1>So, what are you planning to eat?</h1>
        <h1>We have got you covered!</h1>
        {authenticated && <SearchBar /> }
      </div>
      <div>
        {authenticated ? <Welcome /> : <Login />}
      </div>
    </div>
  );
};

export default Home;
