import React from "react";
import './ProfilePage.css';

export const Profile = () => {
    return (
        <div className="profile-page">
            <div className="profile-info">
                <div className="profile-pic-container"></div>
                <div className="user">
                        <div className="name">
                            <i></i>
                            <span>Jane Doe</span>
                        </div>
                    <div className="email"><span>JaneDoe@gmail.com</span></div>
                </div>
            </div>
            <div className="saved-recipes"></div>
        </div>
    )
}