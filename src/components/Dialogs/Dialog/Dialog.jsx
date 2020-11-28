import React from "react";
import classes from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
    return (
        <div>
            <div><NavLink to={'/messages/1' + props.id} className={classes.itemDialog} activeClassName={classes.activeDialog}>{props.name}</NavLink></div>
            <div className={classes.messages}>{props.message}</div>
        </div>
    )
};

export default Dialog;