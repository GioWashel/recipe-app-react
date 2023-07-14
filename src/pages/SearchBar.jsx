import { useState } from "react";
import "./SearchBar.css";
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
const {Search} = Input;

export const SearchBar = () => {
    const navigate = useNavigate();
    function HandleSearch(value) {
        if(value)
        navigate(`/search/${value}`);
    }

    return(
        <Search 
        placeholder="Search for recipes here" 
        onSearch={HandleSearch} 
        enterButton={<SearchOutlined  />}
        size="large"
        style={{
        borderRadius: '20px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        }}
        />

    );
}