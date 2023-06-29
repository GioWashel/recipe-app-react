import React from "react";
import "./SearchBar.css";
import {FaSearch} from "react-icons/fa";

export const SearchBar = () => {

    return(
        <div className="search-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="Enter a recipe..." type="text" />
        </div>

    );
}