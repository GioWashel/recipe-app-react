import React, { useEffect } from "react";
import "./HomePage.css";
import { Login } from "./Login";
import { SearchBar } from "./SearchBar";
import { Welcome } from "../components/Welcome";
import { Typography, Space, Statistic } from "antd";
import { Image } from "antd";
import { HeartOutlined, SaveOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { fetchRecipes } from "../services/endpoints/recipes";
const { Title, Paragraph } = Typography;
export const Home = ({ authenticated }) => {
  return (
    <div className="home">
      <div className="t-container">
        <Title>So, what are you planning to eat?</Title>
        <Title level={2}>We have got you covered!</Title>
        {authenticated ? (
          <SearchBar />
        ) : (
          <>
            <Title level={4} type="secondary">
              Already a member ?<Link to="/login"> Login </Link>
              Or create an account<Link to="/register"> Sign up</Link>
            </Title>
    
          </>
        )}
      </div>
      <div>
        {authenticated ? (
          <Welcome />
        ) : (
          <div className="content-container">
            <div className="images-container">
              <img
                className="img"
                src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                alt="img-1"
              ></img>
              <img
                className="img"
                src="https://images.unsplash.com/photo-1540660290370-8aa90e451e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt="img-2"
              ></img>
            </div>
            <div className="info-container">
              <Title level={3}>Discover New Recipes</Title>
              <Paragraph>
                <Space>
                  <HeartOutlined />
                  Explore a vast collection of mouth-watering recipes from different
                  cuisines around the world. Whether you're a seasoned chef or a cooking
                  enthusiast, there's something for everyone.
                </Space>
              </Paragraph>
              <Title level={3}>Save and Organize Favorites</Title>
              <Paragraph>
                <Space>
                  <SaveOutlined />
                  Save your favorite recipes to easily access them later. Create custom
                  collections and organize your recipes based on your preferences, making
                  meal planning a breeze.
                </Space>
              </Paragraph>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
