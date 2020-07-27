import React from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";

const Navigation = (props) => {

    let friendsIcons = props.friends.map((friend) => {
        return <Friends name={friend.name} avatar={friend.avatar} />
    });

    return (
        <nav className={classes.navigation}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/messages' activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/friends' activeClassName={classes.activeLink}>Friends</NavLink>
            </div>
            <div className={classes.avatars}>
                {friendsIcons}
            </div>
        </nav>
    )
};

export default Navigation;