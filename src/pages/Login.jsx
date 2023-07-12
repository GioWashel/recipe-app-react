import { useState } from "react";
import "./LoginRegister.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/endpoints/users";
export const Login = ({ setAccessToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
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
      setErrorMessage("Please enter a valid username or password !");
    }
  };
  return (
    <div className="login-register-container">
      <div className="auth-form-container">
        <h1 className="top-h1">Recipe App</h1>

        <form className="forms" onSubmit={handleSubmit}>
          <input
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
            required
          />
          <input
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />

          <button className="login-button" type="submit">
            <span>LOGIN</span>
          </button>
        </form>
        <div>{errorMessage}</div>
        <Link to="/register">
          <button className="link-button">
            Don't have an account? Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};
