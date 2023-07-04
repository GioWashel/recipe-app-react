import { useState } from "react";
import "./LoginRegister.css";
import { Link } from "react-router-dom";
import { register } from "../services/endpoints/users";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);
  
  const sendForm = async () => {
    const data = {
      username: username,
      password: password,
      email: email,
      password2: password2,
    };
    try {
      const response = await register(JSON.stringify(data));
      if (response.status === 201) {
        setErrorMessage(["Account Created ! Go to Login"]);
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
          setErrorMessage(errorMessage)
      } else {
        setErrorMessage(["Error occurred during registration. Please try again."]);
      }
    }
  };
  return (
    <div className="login-register-container">
      <div className="auth-form-container">
        <h1 id="top-h1">Sign Up</h1>
        <form className="forms" encType="multipart/form-data" method="post">
          <input
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
          <input
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
            <input
            className="form-input"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            type="password"
            placeholder="rewrite Password"
          />
          <button
            className="login-button"
            onClick={(e) => {
              e.preventDefault();
              sendForm();
            }}
          >
            SUBMIT
          </button>
        </form>
        {errorMessage.map((message, index) =>(
          <div key={index}>{message}</div>
        )
        )}
        <Link to="/login">
          <button className="link-button">Have an account? Login</button>
        </Link>
      </div>
    </div>
  );
};
