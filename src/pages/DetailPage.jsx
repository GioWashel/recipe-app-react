import { useEffect, useState } from "react";
import "./Detailpage.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deleteRecipe,
  fetchRecipeDetail,
  updateRecipe,
} from "../services/endpoints/recipes";
import { isAllowed } from "../services/utils/isAllowed";
import { FavoriteButton } from "../components/FavoriteButton";
export const DetailPage = () => {
  const { slug } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [isAllowedUser, setIsAllowedUser] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState(null);
  const [errorMessage, setErrorMessage] = useState([]);
  const navigate = useNavigate();
  // fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchRecipe = await fetchRecipeDetail(slug);
        const allowed = await isAllowed(slug);
        setIsAllowedUser(allowed);
        setRecipe(fetchRecipe["recipe"]);
        setEditedRecipe(fetchRecipe["recipe"]);
        setRecommendations(fetchRecipe["similar_recipes"].slice(0, 7));
      } catch (error) {
        console.error("Error fetching data ", error);
      }
    };
    fetchData();
  }, [slug,isEditing]);
  if (!recipe) {
    return (
      <div className="recipe-container">
        <div className="recipe">Loading ....</div>
      </div>
    );
  }
  const handleClickDelete = async () => {
    try {
      await deleteRecipe(slug);
      navigate("/profile/");
    } catch (error) {
      console.error("Error while deleting");
    }
  };
  const handleEdit = async () => {
    try {
      // Convert tags to an array of primary key values
      const tagIds = editedRecipe.tags.map(tag => tag.id);
      const updatedRecipe = { ...editedRecipe, tags: tagIds};
      await updateRecipe(slug, updatedRecipe);
      setIsEditing(false);
    } catch (error) {
      const response = error.response;
      if (response && response.data) {
        let errorMessage = [];
        for (let field in response.data) {
          try {
            const fieldErrors = response.data[field];
            const errorMessages = fieldErrors.map((errorM) => `${field}: ${errorM}`);
            errorMessage.push(errorMessages);
          } catch {
            errorMessage.push("Error occured !");
            break;
          }
        }
        setErrorMessage(errorMessage);
      }
    }
  };
  const HandleIsEditing = () => {
    setIsEditing(!isEditing);
    setEditedRecipe(recipe);
    setErrorMessage("");
  }
  return (
    <div>
      <div className="recipe-container">
        <div className="recipe">
          <div className="img-container">
            <img src={recipe.recipe_image} alt={recipe.title} />
          </div>
          <div className="details">
            {isEditing ? (
              <input
                type="text"
                value={editedRecipe.title}
                onChange={(e) =>
                  setEditedRecipe({ ...editedRecipe, title: e.target.value })
                }
              ></input>
            ) : (
              <div className="title-container">
                <h2 className="title">{recipe.title}</h2>
                <FavoriteButton slug={recipe.slug} />
              </div>
            )}
            <div className="serving">
              <h3>Serving</h3>
              {isEditing ? (
                <input
                  type="number"
                  value={editedRecipe.servings}
                  onChange={(e) =>
                    setEditedRecipe({ ...editedRecipe, servings: e.target.value })
                  }
                ></input>
              ) : (
                <p>{recipe.servings}</p>
              )}
            </div>
            <div className="ingredients">
              <h3>Ingredients</h3>
              <ul>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedRecipe.ingredients}
                    onChange={(e) =>
                      setEditedRecipe({ ...editedRecipe, ingredients: e.target.value })
                    }
                  ></input>
                ) : (
                  recipe.ingredients
                )}
              </ul>
            </div>
            <div className="instructions">
              <h3>Instructions</h3>
              <ul>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedRecipe.instructions}
                    onChange={(e) =>
                      setEditedRecipe({ ...editedRecipe, instructions: e.target.value })
                    }
                  ></input>
                ) : (
                  recipe.instructions
                )}
              </ul>
            </div>
            {isAllowedUser && !isEditing && (
              <div className="button-group">
                <button className="user-btn" onClick={() => HandleIsEditing()}>
                  Edit
                </button>
                <button className="user-btn" onClick={() => handleClickDelete()}>
                  delete
                </button>
              </div>
            )}
            {errorMessage}
            {isEditing && (
              <div className="button-group">
                <button className="user-btn" onClick={() => HandleIsEditing()}>
                  Cancel
                </button>
                <button className="user-btn" onClick={() => handleEdit()}>
                  Confirm
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="rec-container">
          <h3>You may also like :</h3>
          <div className="recipes-list">
            {recommendations.map((recipe, index) => {
              return (
                <div key={index} className="rec">
                  <div className="recipe-rec-text">
                    <Link to={"/recipe/" + recipe.slug}>{recipe.title}</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
