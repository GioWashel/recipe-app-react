import "./SearchBar.css";
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


export const SearchBar = () => {
    
    const navigate = useNavigate();
    function search(e, value) {
        if (e.key === 'Enter') navigate(`/search/${value}`);
    }

    return(
        <div className="search-wrapper">
            <FaSearch id="search-icon" />
            <input className="search-input"placeholder="Find a recipe..." type="text"
                onKeyDown={e => search(e, e.target.value)}
            ></input>
        </div>

    );
}