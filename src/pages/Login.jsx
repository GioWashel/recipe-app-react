import { useState } from "react";
import { Form, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/endpoints/users";
import { Typography } from 'antd';
const { Title } = Typography;
export const Login = ({ setAccessToken }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { username, password } = values;
    const credentials = {
      username: username,
      password: password,
    };
    try {
      const status = await login(credentials);
      if (status === 200) {
        navigate("/home");
      }
    } catch (error) {
      setErrorMessage("Please enter a valid username or password!");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ width: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#fff" }}>
        <Title style={{ textAlign: "center", marginBottom: "20px" }}>Login</Title>

        <Form onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please enter your username" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              LOGIN
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: "center", color: "red", marginBottom: "10px" }}>{errorMessage}</div>
        <div style={{ textAlign: "center" }}>
          <Title level={5}> Don't have an account? <Link to="/register">Sign up</Link></Title>
        </div>
      </div>
    </div>
  );
};
