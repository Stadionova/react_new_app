import React from "react";
import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="app-wrapper__navigation">
            <div className="app-wrapper__navigation-item">
                <a>Profile</a>
            </div>
            <div className="app-wrapper__navigation-item">
                <a>Messages</a>
            </div>
            <div className="app-wrapper__navigation-item">
                <a>News</a>
            </div>
            <div className="app-wrapper__navigation-item">
                <a>Music</a>
            </div>
            <div className="app-wrapper__navigation-item">
                <a>Settings</a>
            </div>
        </nav>
    )
};

export default Navigation;