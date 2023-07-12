import { get } from "../services/utils/request";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ExplorePage } from "./ExplorePage";
import { RecipeCard } from "../components/RecipeCard";
import { searchRecipe } from "../services/endpoints/recipes";
import "./SearchPage.css";
export const SearchPage = () => {
    const [recipes, setRecipes] = useState([]);
    const {query} = useParams();
    const [isloading, setIsLoading] = useState(true);
    const [isRecipeFound, setIsRecipeFound ] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = searchRecipe(query);
                if (recipes !== []) setRecipes(res);
                else setIsRecipeFound(false);
            } catch (error) {
                console.error("error fetching recipes", error);
            }
        };
        fetchData();
        setIsLoading(false);
    }, [])
    if(isloading){
        return(
            <div></div>
        )
    }
    return (
        <div>
            <div className="recipe-list-container">
                {isRecipeFound ? recipes.map((recipe, index) => (
                <RecipeCard recipe={recipe}  key={index} />
                )) : <h1 className="error-text">No Recipe found with name {query} ! </h1>}
            </div>
        </div>
    )

    
}