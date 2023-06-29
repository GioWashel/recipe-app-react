import React, {useState} from "react";
import "./LoginRegister.css";
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }
    return(
        <div className="auth-form-container">
            <h1>Recipe App</h1>
            <form className="forms" onsubmit={handleSubmit}>
                <input className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/>
                <input className="form-input"value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <button className="login-button" type="submit">LOGIN</button>   
            </form>
            <button className="link-button"onClick={() => props.onFormSwitch('register')}>Don't have an account? Sign up</button>
        </div>
        
    );
}