import { useEffect, useState } from "react";
import { RecipeCard } from "../components/RecipeCard";
import "./ExplorePage.css";
import { Link, useParams } from "react-router-dom";
import { fetchRecipes } from "../services/endpoints/recipes";
//im thinking for the explore page we can display a bunch of cards, and when the user clicks on that card it will direct them to the
//detail page for that card -gio

//a card only holds the name and image
export const ExplorePage = ({ setRecipe }) => {
  const { page = "1" } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const recipesData = await fetchRecipes(page);
        setPrev(recipesData.previous);
        setNext(recipesData.next);
        setRecipes(recipesData.results);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, [page]);
  return (
    <div className="wrapper">
      <div className="recipe-list-container">
        {recipes.map((recipe, index) => (
          <RecipeCard recipe={recipe}  key={index} />
        ))}
      </div>
      <div className="next-prev"> 
          {prev && (
            <Link to={"/explore/" + (parseInt(page) - 1).toString()}>
              <button className="next-prev-button">Prev</button>
            </Link>
          )}{" "}
          {next && <Link to={"/explore/" + (parseInt(page) + 1).toString()}>
            <button className="next-prev-button">Next</button>
            </Link>}
      </div>
    </div>
  );
};
