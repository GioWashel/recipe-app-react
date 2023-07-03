import { useEffect, useState } from "react";
import "./Detailpage.css";
import { useParams } from 'react-router-dom';
import { fetchRecipeDetail } from "../services/endpoints/recipes";
export const DetailPage = () => {
  const {slug} = useParams();
  const [recipe, setRecipe] = useState(null);
  useEffect(()=>{
    const fetchData = async()=>{
      try{
      const fetchRecipe = await fetchRecipeDetail(slug);
      setRecipe(fetchRecipe);
      }catch(error){
        console.error("Error fetching data ",error);
      }
    }
    fetchData();
  },[slug]);
  if(!recipe){
    return (
      <div className="recipe-container">
      <div className="recipe">
        Loading ....
        </div>
      </div>
    )
  }
  return (
    <div className="recipe-container">
      <div className="recipe">
        <div className="img-container">
          <img src={recipe.recipe_images} alt={recipe.title} />
        </div>
        <div className="details">
          <h2 className="title">{recipe.title}</h2>
          <div className="serving">
            <h3>Serving</h3>
            <p>{recipe.servings}</p>
          </div>
          <div className="ingredients">
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.split("\r\n").map((item, index) => (
                <li key={index}>
                  <label htmlFor={`ingredient-${index}`}>
                    <p>{item}</p>
                    <input
                      type="checkbox"
                      name={`ingredient-${index}`}
                      id={`ingredient-${index}`}
                    />
                    <div class="check-mark"></div>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="instructions">
            <h3>Instructions</h3>
            <ul>
              {recipe.instructions}
               {/* {recipe.instructions.map((item, index) => (
                <li key={index}>
                  <label htmlFor={`instruction-${index}`}>
                    <p>{item}</p>
                    <input
                      type="checkbox"
                      name={`instruction-${index}`}
                      id={`instruction-${index}`}
                    />
                    <div class="check-mark"></div>
                  </label>
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
