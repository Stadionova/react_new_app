import React from "react";
import classes from "./Friends.module.css";
import { NavLink } from "react-router-dom";

const Friends = (props) => {
    return (
        <div className={classes.friendsContainer}>
            <NavLink to={'/friend/' + props.id}>
                <div>{props.name}</div>
                <img className={classes.avatar} src={props.avatar} />
            </NavLink>
        </div>
    )
};

export default Friends;