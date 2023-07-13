import { getFavorites } from "../endpoints/recipes"

export const isFav = async (slug) => {
  try {
    const response = await getFavorites(); 
    const recipes = await response; 
    for (let recipe of recipes) {
      if (recipe["slug"] === slug) {
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};
