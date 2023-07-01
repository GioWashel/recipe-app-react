import React from "react";
import './HomePage.css';
import { Login } from "./Login";
import {Link} from 'react-router-dom';

import { SearchBar } from "./SearchBar";
export const Home = () => {
    return (
        <div className="home">

            <div className="left-home">
            <h1>So, what are you planning to eat?</h1>
            <h1>We have got you covered!</h1>
            <SearchBar/>
            </div>
            <div className="right-home">
                <Login/>
            </div>
        </div>
    )
};

export default Home;
