import React from "react";
import classes from "./ClickedDialog.module.css";

const ClickedDialog = (props) => {
    return (
        <div className={classes.post}>
            <div>
                <span className={classes.number}>{props.message}</span>
            </div>
        </div>
    )
};

export default ClickedDialog;