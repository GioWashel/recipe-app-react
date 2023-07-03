import React from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";

export const RecipeCard = ({ recipe}) => {
  return (
    <Link to={`/recipe/${recipe.slug}`}>
      <div className="card">
        <img id="recipe-image" src={recipe.recipe_image} alt={recipe.title} />
        <div className="gradient-overlay"></div>
        <h3 id="title">{recipe.title}</h3>
      </div>
    </Link>
  );
};
