import React from "react";
import './ProfilePage.css';
import { FaMailBulk } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export const Profile = () => {
    return (
        <div className="profile-page">
            <div className="profile-info">
                <div className="profile-pic-container"></div>
                <div className="user">
                        <div className="name">
                            <FaUser className="icon" id="user-icon"/> 
                            <span>Jane Doe</span>
                        </div>
                    <div className="email"><FaMailBulk className="icon" id="mail-icon"/> <span>JaneDoe@gmail.com</span></div>
                </div>
            </div>
            <div className="saved-recipes">
                <div className="message">
                    <span>Recipes you save will appear here</span>
                    <button className="to-recipes">Explore recipes</button>
                </div>
                <div className="recipe-card"></div>
            </div>
        </div>
        // <span>Hello world!</span>
    )
}