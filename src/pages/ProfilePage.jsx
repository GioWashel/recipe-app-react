import { useEffect, useState } from "react";
import "./ProfilePage.css";
import { FaMailBulk } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { getHistory, getProfile } from "../services/endpoints/users";
import { RecipeCard } from "../components/RecipeCard";
import { Link } from "react-router-dom";
import { getFavorites } from "../services/endpoints/recipes";

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
    fetchDetails();
    const fetchFav = async () => {
      try {
        const response = await getFavorites();
        const recipes = await response;
        setUserFav(recipes);
      }catch(error){
        console.error(error);
      }
    }
    fetchFav();
    const fetchHistory = async () => {
      try {
        const history = await getHistory();
        if (history.data) {
          setUserHistory(history.data);
        } else {
          setUserHistory(["no history"]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchHistory();
    setLoading(false);
  }, []);

  if (loading) {
    return <div></div>;
  }
  return (
    <div className="profile-page">
      <div className="profile-info">
        <div className="profile-pic-container"></div>
        <div className="user">
          <div className="name">
            <FaUser className="icon" id="user-icon" />
            <span className="span">{userProfile.username}</span>
          </div>
          <div className="email">
            <FaMailBulk className="icon" id="mail-icon" />{" "}
            <span>{userProfile.email}</span>
          </div>
        </div>
      </div>

      <div className="saved-recipes">
        <div className="message">
          <h3>Your recipes will apear here :</h3>
          <Link to="/explore">
            {" "}
            <button className="to-recipes">Explore recipes</button>{" "}
          </Link>
        </div>
        <div className="myrecipe-list-container">
          {userRecipes.map((recipe, index) => {
            return <RecipeCard key={index} recipe={recipe} />;
          })}
        </div>
      </div>
      <div className="saved-recipes">
        <div className="message">
          <h3>Your Favorite recipes will apear here :</h3>
        </div>
        <div className="myrecipe-list-container">
          {userFav.map((recipe, index) => {
            return <RecipeCard key={index} recipe={recipe} />;
          })}
        </div>
      </div>
    </div>
  );
};
