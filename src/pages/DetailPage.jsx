import { useEffect, useState } from "react";
import "./Detailpage.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Input, Form, Card, Spin, Popconfirm } from "antd";
import { HeartOutlined, HeartFilled ,ClockCircleOutlined } from "@ant-design/icons";
import {
  deleteRecipe,
  fetchRecipeDetail,
  updateRecipe,
} from "../services/endpoints/recipes";
import { isAllowed } from "../services/utils/isAllowed";
import { FavoriteButton } from "../components/FavoriteButton";
import Skeleton from "react-loading-skeleton";
export const DetailPage = () => {
  const { slug } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [isAllowedUser, setIsAllowedUser] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState(null);
  const [errorMessage, setErrorMessage] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchRecipe = await fetchRecipeDetail(slug);
        const allowed = await isAllowed(slug);
        setIsAllowedUser(allowed);
        setRecipe(fetchRecipe["recipe"]);
        setEditedRecipe(fetchRecipe["recipe"]);
        setRecommendations(fetchRecipe["similar_recipes"].slice(0, 4));
      } catch (error) {
        console.error("Error fetching data ", error);
      }
    };
    fetchData();
  }, [slug, isEditing]);

  if (!recipe) {
    return (
      <>
        <div className="recipe-container">
          <Spin spinning={!recipe} />
        </div>
      </>
    );
  }

  const handleClickDelete = async () => {
    try {
      await deleteRecipe(slug);
      navigate("/profile/");
    } catch (error) {
      console.error("Error while deleting");
    }
  };

  const handleEdit = async () => {
    try {
      const tagIds = editedRecipe.tags.map((tag) => tag.id);
      const updatedRecipe = { ...editedRecipe, tags: tagIds };
      await updateRecipe(slug, updatedRecipe);
      setIsEditing(false);
    } catch (error) {
      const response = error.response;
      if (response && response.data) {
        let errorMessage = [];
        for (let field in response.data) {
          try {
            const fieldErrors = response.data[field];
            const errorMessages = fieldErrors.map((errorM) => `${field}: ${errorM}`);
            errorMessage.push(errorMessages);
          } catch {
            errorMessage.push("Error occurred!");
            break;
          }
        }
        setErrorMessage(errorMessage);
      }
    }
  };

  const handleIsEditing = () => {
    setIsEditing(!isEditing);
    setEditedRecipe(recipe);
    setErrorMessage([]);
  };

  return (
    <div>
      <div className="recipe-container">
        <div className="recipe">
          <div className="img-container">
            <img src={recipe.recipe_image} alt={recipe.title} />
          </div>
          <div className="details">
            {isEditing ? (
              <Form onFinish={handleEdit}>
                <Form.Item
                  name="title"
                  initialValue={editedRecipe.title}
                  rules={[{ required: true, message: "Please enter a title" }]}
                  onChange={(e) => {
                    setEditedRecipe({ ...editedRecipe, title: e.target.value });
                  }}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="servings"
                  initialValue={editedRecipe.servings}
                  rules={[{ required: true, message: "Please enter servings" }]}
                  onChange={(e) =>
                    setEditedRecipe({ ...editedRecipe, servings: e.target.value })
                  }
                >
                  <Input type="number" />
                </Form.Item>
                <Form.Item
                  name="ingredients"
                  initialValue={editedRecipe.ingredients}
                  rules={[{ required: true, message: "Please enter ingredients" }]}
                  onChange={(e) =>
                    setEditedRecipe({ ...editedRecipe, ingredients: e.target.value })
                  }
                >
                  <Input.TextArea />
                </Form.Item>
                <Form.Item
                  name="instructions"
                  initialValue={editedRecipe.instructions}
                  rules={[{ required: true, message: "Please enter instructions" }]}
                  onChange={(e) =>
                    setEditedRecipe({ ...editedRecipe, instructions: e.target.value })
                  }
                >
                  <Input.TextArea />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Confirm
                  </Button>
                  <Button onClick={handleIsEditing}>Cancel</Button>
                </Form.Item>
              </Form>
            ) : (
              <>
                <div className="title-container">
                  <div className="title-time">
                    <h2 className="title">{recipe.title}</h2>
                     <div className="time-info">
                      <ClockCircleOutlined />
                      <span className="prep-time">{recipe.prep_time}mn</span>
                    </div>
                  </div>
                  <FavoriteButton slug={recipe.slug} />
                </div>
                <div className="serving">
                  <h3>Serving</h3>
                  <p>{recipe.servings}</p>
                </div>
                <div className="ingredients">
                  <h3>Ingredients</h3>
                  <p>{recipe.ingredients}</p>
                </div>
                <div className="instructions">
                  <h3>Instructions</h3>
                  <p>{recipe.instructions}</p>
                </div>
              </>
            )}

            {isAllowedUser && !isEditing && (
              <div className="button-group">
                <Button type="primary" onClick={handleIsEditing}>
                  Edit
                </Button>
                <Popconfirm
                  title="Delete Recipe"
                  description="Are you sure to delete this recipe ?"
                  onConfirm={handleClickDelete}
                  okText="Delete"
                  cancelText="Cancel"
                >
                  <Button type="primary" danger style={{ marginLeft: "5px" }}>
                    Delete
                  </Button>
                </Popconfirm>
              </div>
            )}

            {isEditing && (
              <div className="button-group">
                <Button type="primary" onClick={handleIsEditing}>
                  Cancel
                </Button>
              </div>
            )}

            {errorMessage.length > 0 && (
              <div style={{ color: "red", marginTop: "1rem" }}>
                {errorMessage.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="rec-container">
          <h3>You may also like</h3>
          <div className="recipes-list">
            {recommendations.map((recipe, index) => (
              <Card key={index} style={{ marginBottom: "10px" }}>
                <Link to={`/recipe/${recipe.slug}`}>{recipe.title}</Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
