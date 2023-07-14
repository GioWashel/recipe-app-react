import { useState } from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { register } from "../services/endpoints/users";
import { Typography } from 'antd';
const { Title } = Typography;
export const Register = () => {
  const [errorMessage, setErrorMessage] = useState([]);

  const onFinish = async (values) => {
    const { username, email, password, password2 } = values;
    const data = {
      username: username,
      email: email,
      password: password,
      password2: password2,
    };
    try {
      const response = await register(JSON.stringify(data));
      if (response.status === 201) {
        setErrorMessage(["Account Created! Go to Login"]);
      }
    } catch (error) {
      const response = error.response;
      if (response && response.data) {
        let errorMessage = [];
        for (let field in response.data) {
          const fieldErrors = response.data[field];
          const errorMessages = fieldErrors.map(
            (errorM) => `${field}: ${errorM}`
          );
          errorMessage.push(errorMessages);
        }
        setErrorMessage(errorMessage);
      } else {
        setErrorMessage(["Error occurred during registration. Please try again."]);
      }
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ width: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#fff" }}>
        <Title style={{ textAlign: "center", marginBottom: "20px" }}>Sign Up</Title>

        <Form onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please enter your username" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="password2"
            rules={[
              { required: true, message: "Please rewrite your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("The two passwords do not match"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Rewrite Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              SUBMIT
            </Button>
          </Form.Item>
        </Form>
        {errorMessage.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
        <Title level={5} style={{ textAlign: "center" }}>
          Have an account? <Link to="/login">Login</Link>
        </Title>
      </div>
    </div>
  );
};
