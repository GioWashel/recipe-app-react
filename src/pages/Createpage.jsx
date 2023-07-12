import {  useState } from "react";
import "./Createpage.css";
import { createRecipe } from "../services/endpoints/recipes";
import { useNavigate } from "react-router-dom";

export const Create = ({ tags }) => {
  const [formData, setFormData] = useState({
    title: "",
    tags: [],
    ingredients: "",
    servings: "",
    prep_time: "",
    instructions: "",
    custom_tags: "",
    recipe_image: "",
  });
  const [errorMessage, setErrorMessage] = useState([]);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    // if formData.custom_tags is undefined or is equal to an empty string then delete it
    if (!formData.custom_tags) {
      // delete doesn't throw an error even if the key is not defined in the object
      delete formData.custom_tags;
    }
    if (!formData.recipe_image) {
      delete formData.recipe_image;
    }
    try {
      console.log(formData);
      await createRecipe(formData);
      setErrorMessage(["Recipe Created !"]);
      navigate("/profile/");
    } catch (error) {
      const response = error.response;
      if (response && response.data) {
        let errorMessage = [];
        for (let field in response.data) {
          try {
          const fieldErrors = response.data[field];
          const errorMessages = fieldErrors.map((errorM) => `${field}: ${errorM}`);
          errorMessage.push(errorMessages);
          }catch {
            errorMessage.push("Error occured !");
            break;
          }
        }
        setErrorMessage(errorMessage);
      }
    }
  }

  function handleChange(e) {
    const newData = { ...formData, [e.target.name]: e.target.value };
    // console.log('this is the new data', newData);
    setFormData(newData);
    // console.log(formData);
  }

  function addTags(id) {
    const tagsCopy = formData.tags.slice();
    const index = tagsCopy.indexOf(id);
    if (index > -1) {
      tagsCopy.splice(index, 1);
    } else {
      tagsCopy.push(id);
    }
    setFormData({ ...formData, tags: tagsCopy });
  }

  return (
    <div className="create-page">
      <div className="create-background"></div>
      {/* <button id="test-button" onClick={e => createRecipe(e)}>post test</button> */}
      <form className="create-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="small-inputs">
          <div className="left-side">
            <input
              className="create-input"
              placeholder="title"
              name="title"
              value={formData.title}
              onInput={(e) => handleChange(e)}
            ></input>

            <input
              className="create-input"
              placeholder="image url"
              name="recipe_image"
              onChange={handleChange}
            ></input>

            <input
              className="create-input"
              placeholder="custom tags"
              name="custom_tags"
              value={formData.custom_tags}
              onChange={handleChange}
            ></input>

            <input
              className="create-input"
              placeholder="servings"
              type="number"
              name="servings"
              value={formData.servings}
              onChange={handleChange}
            ></input>

            <input
              className="create-input"
              placeholder="prep-time"
              type="number"
              name="prep_time"
              value={formData.prep_time}
              onChange={handleChange}
            ></input>
          </div>

          <div className="tags-container">
            <ul>
              {tags.map((tag) => (
                <li key={tag.id}>
                  <input
                    type="checkbox"
                    id={tag.id}
                    onChange={() => addTags(tag.id)}
                  ></input>
                  <label htmlFor={tag.id}>{tag.name}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <textarea
          placeholder="ingredients"
          className="create-textarea"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
        ></textarea>

        <textarea
          placeholder="instructions"
          className="create-textarea"
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
        ></textarea>
        {errorMessage.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
        <button className="recipe-submit-button" type="submit">
          Create Recipe
        </button>
      </form>
    </div>
  );
};
