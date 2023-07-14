import React, { useEffect, useState } from "react";
import { Card, Typography, Button, Avatar, Tabs, Result, Empty } from "antd";
import {
  UserOutlined,
  MailOutlined,
  HeartOutlined,
  FileDoneOutlined,
  ClockCircleOutlined,
  QuestionOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { getHistory, getProfile } from "../services/endpoints/users";
import { RecipeCard } from "../components/RecipeCard";
import { getFavorites } from "../services/endpoints/recipes";
import "./ProfilePage.css";

const { Title } = Typography;
const { TabPane } = Tabs;

export const Profile = () => {
  const [userHistory, setUserHistory] = useState([]);
  const [userProfile, setUserProfile] = useState({});
  const [userRecipes, setUserRecipes] = useState([]);
  const [userFav, setUserFav] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const profileDetails = await getProfile();
        setUserProfile(profileDetails.userprofile);
        setUserRecipes(profileDetails.recipes);
      } catch (e) {
        console.error(e);
      }
    };

    const fetchFav = async () => {
      try {
        const response = await getFavorites();
        const recipes = await response;
        setUserFav(recipes);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchHistory = async () => {
      try {
        const history = await getHistory();
        if (history) setUserHistory(history);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetails();
    fetchFav();
    fetchHistory();
    setLoading(false);
  }, []);

  if (loading) {
    return <div></div>;
  }

  return (
    <div className="profile-page">
      <div className="profile-info">
        <Avatar
          className="profile-pic-container"
          size={200}
          src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
        />
        <div className="user">
          <div className="name">
            <UserOutlined className="icon" />
            <span className="span">{userProfile.username}</span>
          </div>
          <div className="email">
            <MailOutlined className="icon" /> <span>{userProfile.email}</span>
          </div>
        </div>
      </div>

      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <FileDoneOutlined />
              Created Recipes
            </span>
          }
          key="1"
        >
          <div className="saved-recipes">
            <div className="myrecipe-list-container">
              {userRecipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
              ))}
            </div>
          </div>
        </TabPane>
        <TabPane
          tab={
            <span>
              <HeartOutlined />
              Favorite Recipes
            </span>
          }
          key="2"
        >
          <div className="saved-recipes">
            <div className="myrecipe-list-container">
              {userFav.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
              ))}
            </div>
          </div>
        </TabPane>
        <TabPane
          tab={
            <span>
              <ClockCircleOutlined />
              Watched recipes
            </span>
          }
        >
          {userHistory ? (
            <div className="myrecipe-list-container">
              {userHistory.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </TabPane>
      </Tabs>
    </div>
  );
};
