import React from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";

export const RecipeCard = ({ recipe }) => {
  return (
    <Link to="/details">
      <div className="card">
        <img id="recipe-image" src={recipe.imageURL} alt={recipe.name} />
        <div className="gradient-overlay"></div>
        <h3 id="title">{recipe.name}</h3>
      </div>
    </Link>
  );
};
