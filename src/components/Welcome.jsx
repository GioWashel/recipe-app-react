import { Link } from "react-router-dom";
import "../pages/LoginRegister.css";
export const Welcome = ({setAccessToken}) => {
  return (
    <div className="login-register-container">
      <div className="auth-form-container">
        <h1 id="top-h1">Recipe App</h1>
        <div><h1 id="username">Welcome ! "username" </h1></div>
           <Link to="/profile">
          <button className="login-button" type="submit">
            Go to profile
          </button>
          </Link>
          
      </div>
    </div>
  );
};
