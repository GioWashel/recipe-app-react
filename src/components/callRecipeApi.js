// import your key,but don't commit the file.
import React from 'react';
import { useEffect, useState } from 'react';
import {myNinjaKey} from '../ninjaKey.js';

export const RecipesList = ({query}) => {
    const [recipes, setRecipes] = useState([]);
    const url = "https://api.api-ninjas.com/v1/recipe?query=" + query;


    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {'Content-Type': 'application/json', 'X-Api-Key': myNinjaKey } 
        })
        .then(response => response.json())
        .then(data => {setRecipes(data)})
        .catch(error => console.error(error))
    }, []);

    const recipeList = recipes.map(recipe => {
        return <li>{recipe.title}</li>
    })


    return (
        <div>
            <ul>
                {recipeList}
            </ul>

        </div>
    )
}