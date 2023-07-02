import React from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";
import { DetailPage } from "../pages/DetailPage";

export const RecipeCard = ({recipe}) => {
    
    return(
        <div className= "card-container">
            <Link to="/details">
                <button id="card-button">
                    <div className="title-container">
                        <h1 id="title">{recipe.name}</h1>
                    </div>
                    <div className="image-container">   
                        <img id="recipe-image" src={recipe.imageURL} alt={recipe.name} width="250" height="200"/>
                    </div>
                </button>
            </Link>
            
        </div>
    ); 
};