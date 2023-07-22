import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RecipeCard } from "../components/RecipeCard";
import { searchRecipe } from "../services/endpoints/recipes";
import "./SearchPage.css";
import { Button, Result, Spin } from "antd";
export const SearchPage = () => {
    const [recipes, setRecipes] = useState([]);
    const {query} = useParams();
    const [isloading, setIsLoading] = useState(true);
    const [isRecipeFound, setIsRecipeFound ] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await searchRecipe(query);
                if (res.length) {
                    setRecipes(res);
                    setIsRecipeFound(true);
                }
            } catch (error) {
                console.error("error fetching recipes", error);
            }
        };
        fetchData();
        setIsLoading(false);
    }, [])
    if(isloading){
        return(
        <>
            <div className="recipe-container">
                <Spin />
            </div>
        </>
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