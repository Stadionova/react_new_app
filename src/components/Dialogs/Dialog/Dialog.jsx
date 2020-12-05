import React from "react";
import classes from "./Dialog.module.css";
import { NavLink } from "react-router-dom";
import ClickedDialog from "./ClickedDialog/ClickedDialog";
import { Route } from "react-router-dom";

const Dialog = (props) => {
    const dialog = props.message.map((post) => {
        return (
            <Route path={'/messages/1' + props.id} render={() =>
                <ClickedDialog message={post} />}
            />
        )
    });

    function onDialog() {
        console.log('clicked on dialog');
        console.log('props ', props.message);
    }

    return (
        <div>
            <div onClick={onDialog}>
                <NavLink to={'/messages/1' + props.id} className={classes.itemDialog} activeClassName={classes.activeDialog}>{props.name}</NavLink>
            </div>
            {dialog}
        </div>
    )
};

export default Dialog;