import { Link } from "react-router-dom";
import "../pages/LoginRegister.css";
import { useEffect, useState } from "react";
import { getProfile } from "../services/endpoints/users";
export const Welcome = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProfile();
        const username = res.userprofile.username;
        setUsername(username);
      } catch {
        console.error("Error");
      }
    };
    fetchData();
  }, []);
  return (
    <div className="login-register-container">
      <div className="auth-form-container">
        <h1 className="top-h1">Recipe App</h1>
        <div>
          <h1 id="username">Welcome ! {username}</h1>
        </div>
        <Link to="/profile">
          <button className="login-button" type="submit">
            Go to profile
          </button>
        </Link>
      </div>
    </div>
  );
};
