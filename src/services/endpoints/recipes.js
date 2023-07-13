import { get, post, put, del } from "../utils/request";

const basicRoute = "/recipe";
// function fetch recipes
export const fetchRecipes = (page) => {
  return get(`${basicRoute}s/?page=${page}`);
};

// function to create recipes
export const createRecipe = (data) => {
  return post(`${basicRoute}s/`,data);
};

// function to get recipe details
export const fetchRecipeDetail = (slug) => {
  return get(`${basicRoute}/${slug}/`);
};

// function to update recipe
export const updateRecipe = (slug, data) => {
  return put(`${basicRoute}/${slug}/`, data);
};

// function to delete recipe
export const deleteRecipe = (slug) => {
  return del(`${basicRoute}/${slug}/`);
};

// search for recipes
export const searchRecipe = (query) => {
  return get(`/search/?query=${query}`);
}

export const addToFavorites = (slug) => {
  return post(`recipe/${slug}/favourite/`);
}
export const getFavorites = () => {
  return get("favourites/");
}