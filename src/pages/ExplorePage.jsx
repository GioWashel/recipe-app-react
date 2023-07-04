import React from "react";
import { RecipeCard } from "../components/RecipeCard";
import "./ExplorePage.css";
//im thinking for the explore page we can display a bunch of cards, and when the user clicks on that card it will direct them to the
//detail page for that card -gio

//a card only holds the name and image
export const ExplorePage = ({ recipes, setRecipe }) => {
  return (
    <div className="recipe-list-container">
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} setRecipe={setRecipe} />
      ))}
    </div>
  );
};
