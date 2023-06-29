import  React, {useState} from "react";
import "./LoginRegister.css";
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="auth-form-container">
            <h1>Sign Up</h1>
            <form className="forms" onSubmit={handleSubmit}>
                <input className="form-input"value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
                <input className="form-input"value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email" />
                <input className="form-input"value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="Password" />
                <button className="login-button">SUBMIT</button>
            </form>
            <button className="link-button"onClick={() => props.onFormSwitch('login')}>Have an account? Login</button>
        </div>
    );
}