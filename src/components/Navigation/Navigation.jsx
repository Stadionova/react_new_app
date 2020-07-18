import React from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={classes.navigation}>
            <div className={classes.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/messages'>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
        </nav>
    )
};

export default Navigation;