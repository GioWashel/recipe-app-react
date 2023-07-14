import React from "react";
import "./HomePage.css";
import { Login } from "./Login";
import { SearchBar } from "./SearchBar";
import { Welcome } from "../components/Welcome";
import { Typography } from 'antd';
const { Title } = Typography;
export const Home = ({authenticated}) => {
  return (
    <div className="home">
      <div>
        <Title>So, what are you planning to eat?</Title>
        <Title level={2}>We have got you covered!</Title>
        {authenticated && <SearchBar /> }
      </div>
      <div>
        {authenticated ? <Welcome /> : <Login />}
      </div>
    </div>
  );
};

export default Home;
