import { fetchRecipeDetail } from "../endpoints/recipes";
import { getProfile } from "../endpoints/users";

export const isAllowed = async(slug) =>{
    try {
    const recipe = await fetchRecipeDetail(slug);
    const recipeAuthor = recipe.recipe.author.username;
    const userprofile = await getProfile();
    const username = userprofile.userprofile.username
    if(recipeAuthor === username){
        
        return true;
    }
    }catch(error){
        console.error(error);
    }
    return false;
}