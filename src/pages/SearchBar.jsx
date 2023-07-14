import { useState } from "react";
import "./SearchBar.css";
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


export const SearchBar = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    function search(value) {
        navigate(`/search/${value}`);
    }

    return(
        <div className="search-wrapper">
            <div onClick={()=> search(query)}>
            <FaSearch id="search-icon" />
            </div>
            <input className="search-input"placeholder="Find a recipe..." type="text"
                onChange={(e) => setQuery(e.target.value)}
            ></input>
        </div>

    );
}