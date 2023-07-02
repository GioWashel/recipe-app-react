import { get, post, put, del } from "../utils/request";

const basicRoute = "/recipes";
// function fetch recipes
export const fetchRecipes = () => {
  return get(basicRoute);
};

// function to create recipes
export const createRecipe = (data) => {
  return post(basicRoute, data);
};

// function to get recipe details
export const fetchRecipeDetail = (recipeId) => {
  return get(`${basicRoute}/${recipeId}`);
};

// function to update recipe
export const updateRecipe = (recipeId, data) => {
  return put(`${basicRoute}/${recipeId}`, data);
};

// function to delete recipe
export const deleteRecipe = (recipeId) => {
  return del(`${basicRoute}/${recipeId}`);
};
