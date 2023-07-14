import { useEffect, useState } from "react";
import { RecipeCard } from "../components/RecipeCard";
import "./ExplorePage.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchRecipes } from "../services/endpoints/recipes";
import { Button } from "antd";
import { Typography } from "antd";
const { Title } = Typography;
export const ExplorePage = ({ setRecipe }) => {
  const { page = "1" } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const recipesData = await fetchRecipes(page);
        setPrev(recipesData.previous);
        setNext(recipesData.next);
        setRecipes(recipesData.results);
      } catch (error) {

        if(error.response.status === 404){
            navigate("/404");
        }
        console.error("Error fetching data", error);

      }
    };
    fetchData();
  }, [page]);

  return (
    <div className="wrapper">
      <Title>Discover all recipes here !</Title>

      <div className="recipe-list-container">
        {recipes.map((recipe, index) => (
          <RecipeCard recipe={recipe} key={index} />
        ))}
      </div>
      <div className="next-prev">
        <Link to={`/explore/${parseInt(page) - 1}`}>
          <Button
            className="pagination-button"
            type="primary"
            disabled={!prev} // Disable button if there is no previous page
          >
            Prev
          </Button>
        </Link>
        <Link to={`/explore/${parseInt(page) + 1}`}>
          <Button
            className="pagination-button"
            type="primary"
            disabled={!next} // Disable button if there is no next page
          >
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
};
