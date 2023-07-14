import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ExplorePage } from "./ExplorePage";
import { RecipeCard } from "../components/RecipeCard";
import { searchRecipe } from "../services/endpoints/recipes";
import "./SearchPage.css";
import { Button, Result } from "antd";
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
            <div  className="error-container">
                {isRecipeFound ? recipes.map((recipe, index) => (
                <RecipeCard recipe={recipe}  key={index} />
                )) : <Result status="404" 
                             title="Recipes not found"
                             subTitle = {"No recipes Found with name " + query}
                             extra = {<Link to="/home"><Button type="primary">Back Home</Button></Link>}
                             ></Result>}
            </div>
        </div>
    )

    
}