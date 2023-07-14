import { useState } from "react";
import { Form, Input, Checkbox, Button, Typography, message } from "antd";
import { createRecipe } from "../services/endpoints/recipes";
import { useNavigate } from "react-router-dom";
import "./Createpage.css";
const { Title } = Typography;

export const Create = ({ tags }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState([]);

  const handleSubmit = async (values) => {
    try {
      await createRecipe(values);
      message.success("Recipe Created!");
      navigate("/profile");
    } catch (error) {
      if (error.response && error.response.data) {
        const errors = Object.values(error.response.data).flat();
        setErrorMessage(errors);
      } else {
        setErrorMessage(["An error occurred."]);
      }
    }
  }; 
   const handleTagChange = (checkedValues) => {
    form.setFieldsValue({ tags: checkedValues });
  };

  return (
    <div className="create-container">
      <div className="create-page">
        <Form form={form} className="create-form" onFinish={handleSubmit}>
          <Title level={2}>Add Recipe</Title>

          <div className="small-inputs">
            <div className="left-side">
              <Form.Item
                name="title"
                rules={[{ required: true, message: "Please enter a title" }]}
              >
                <Input placeholder="Title" className="create-input" />
              </Form.Item>

              <Form.Item name="recipe_image">
                <Input placeholder="Image URL" className="create-input" />
              </Form.Item>

              <Form.Item name="custom_tags">
                <Input placeholder="Custom Tags" className="create-input" />
              </Form.Item>

              <Form.Item
                name="servings"
                rules={[{ required: true, message: "Please enter servings" }]}
              >
                <Input
                  type="number"
                  placeholder="Servings"
                  className="create-input"
                />
              </Form.Item>

              <Form.Item
                name="prep_time"
                rules={[{ required: true, message: "Please enter prep time" }]}
              >
                <Input
                  type="number"
                  placeholder="Prep Time"
                  className="create-input"
                />
              </Form.Item>
            </div>

            <div className="tags-container">
              <Title level={4}>Tags</Title>
              <Form.Item
                name="tags"
                rules={[
                  {
                    required: true,
                    message: "Please select at least one tag",
                  },
                ]}
              >
                <Checkbox.Group onChange={handleTagChange}>
                  {tags.map((tag) => (
                    <Checkbox key={tag.id} value={tag.id}>
                      {tag.name}
                    </Checkbox>
                  ))}
                </Checkbox.Group>
              </Form.Item>
            </div>
          </div>


          <Form.Item
            name="ingredients"
            rules={[{ required: true, message: "Please enter ingredients" }]}
          >
            <Input.TextArea
              placeholder="Ingredients"
              rows={4}
              className="create-textarea"
            />
          </Form.Item>

          <Form.Item
            name="instructions"
            rules={[{ required: true, message: "Please enter instructions" }]}
          >
            <Input.TextArea
              placeholder="Instructions"
              rows={4}
              className="create-textarea"
            />
          </Form.Item>

          {errorMessage.length > 0 && (
            <div className="error-message">
              {errorMessage.map((message, index) => (
                <p key={index}>{message}</p>
              ))}
            </div>
          )}

          <Form.Item>
            <Button
              type="primary"
              className="recipe-submit-button"
              htmlType="submit"
            >
              Create Recipe
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
