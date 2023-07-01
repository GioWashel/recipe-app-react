import React, {useState} from "react";
import "./LoginRegister.css";
import { Register } from "./Register";
import { Link } from "react-router-dom";
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }
    return(
        <div className="auth-form-container">
            <h1 id="top-h1">Recipe App</h1>
            <form className="forms" onsubmit={handleSubmit}>
                <input className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/>
                <input className="form-input"value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <button className="login-button" type="submit">LOGIN</button>   
            </form>
            <Link to="/register"><button className="link-button">Don't have an account? Sign up</button></Link>
        </div>
        
    );
}