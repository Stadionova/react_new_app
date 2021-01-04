import React from "react";
import classes from "./Dialog.module.css";
import { NavLink } from "react-router-dom";
import ClickedDialog from "./ClickedDialog/ClickedDialog";

const Dialog = (props) => {
    const dialog = props.message.map((post) => {
        return (
            <ClickedDialog
                newProps={props.newProps}
                message={post}
                key={props.id} />
        )
    });

    return (
        <div className={classes.container}>
            <div className={classes.newMessage}>
                <NavLink to={'/messages/1' + props.id} className={classes.itemDialog} activeClassName={classes.activeDialog}>
                    {props.name}
                </NavLink>
            </div>
            {dialog}
        </div>
    )
};

export default Dialog;