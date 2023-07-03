import React from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";

export const RecipeCard = ({ recipe, setRecipe }) => {
  const handleRecipeClick = () => {
    setRecipe(recipe);
  };

  return (
    <Link to="/details">
      <div className="card" onClick={handleRecipeClick}>
        <img id="recipe-image" src={recipe.imageURL} alt={recipe.name} />
        <div className="gradient-overlay"></div>
        <h3 id="title">{recipe.name}</h3>
      </div>
    </Link>
  );
};
