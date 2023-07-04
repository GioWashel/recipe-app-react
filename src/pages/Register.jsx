import React, { useState } from "react";
import "./LoginRegister.css";
import { Link } from "react-router-dom";
import { register } from "../services/endpoints/register";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function sendForm() {
    const data = {'username': name, 'password': password, 'email': email, 'password2':password}
    register(JSON.stringify(data))
    
  }

  return (
    <div className="login-register-container">
      <div className="auth-form-container">
        <h1 id="top-h1">Sign Up</h1>
        <form className="forms" encType="multipart/form-data" method="post">
          <input
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
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
          <button className="login-button" onClick={(e) => { e.preventDefault(); sendForm() }}>SUBMIT</button>
        </form>
        <Link to="/login">
          <button className="link-button">Have an account? Login</button>
        </Link>
      </div>
    </div>
  );
};
