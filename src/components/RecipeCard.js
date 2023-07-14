import { Card, Rate, Space, Typography, Tag } from "antd";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";
import "./RecipeCard.css";
import { ClockCircleOutlined } from "@ant-design/icons";
const { Text, Title } = Typography;

export const RecipeCard = ({ recipe }) => {
  return (
    <Link
      to={`/recipe/${recipe.slug}`}
      className="recipe-card-link"
      style={{ textDecoration: "none" }}
    >
      <Skeleton loading={!recipe.title && !recipe.recipe_image} active>
        <Card
          hoverable
          className="card-style"
          cover={
            <img alt={recipe.title} src={recipe.recipe_image} className="image-style" />
          }
        >
          <div className="content-style">
            <Title level={5} className="title-style">
              {recipe.title}
            </Title>
            <Text type="secondary">
              Author : <b>{recipe.author.username}</b>
            </Text>
            <div className="info">
              <div className="time-info">
                <ClockCircleOutlined />
                <span className="prep-time">{recipe.prep_time}mn</span>
              </div>
            </div>
            <Space size={[0, 3]} wrap className="tags">
              {recipe.tags.map((tag) => {
                return (
                  <Tag color="gold" key={tag.id}>
                    {tag.name}
                  </Tag>
                );
              })}
            </Space>
          </div>
        </Card>
      </Skeleton>
    </Link>
  );
};
