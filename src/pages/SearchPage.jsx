import { get } from "../services/utils/request";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ExplorePage } from "./ExplorePage";

export const SearchPage = () => {
    const [recipes, setRecipes] = useState([]);
    const {query} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const recipesData = await get(`/search/?query=${query}`);
                 if (recipes !== []) setRecipes(recipesData);
            } catch (error) {
                console.error("error fetching recipes", error);
            }
        };
        fetchData();
    }, [])



    return (
        <div>
            <ExplorePage recipes={recipes}/>
        </div>
    )

    
}