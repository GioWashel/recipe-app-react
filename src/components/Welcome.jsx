import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile } from "../services/endpoints/users";
import { Typography, Button } from "antd";
import "./Welcome.css";
const { Title } = Typography;

export const Welcome = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProfile();
        const username = res.userprofile.username;
        setUsername(username);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="login-register-container welcome">
      <div className="auth-form-container">
        <Title level={2} className="top-h1">
          Recipe App
        </Title>
        <div>
          <Title level={3} id="username-2">
            Welcome, {username}!
          </Title>
        </div>
        <Link to="/profile">
          <Button type="primary" className="login-button">
            Go to profile
          </Button>
        </Link>
      </div>
    </div>
  );
};
