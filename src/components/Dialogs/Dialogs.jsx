import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div>
                    <NavLink to='/anton' className={classes.itemDialog} activeClassName={classes.activeDialog}>Anton</NavLink>
                </div>
                <div>
                    <NavLink to='/sveta' className={classes.itemDialog} activeClassName={classes.activeDialog}>Sveta</NavLink>
                </div>
                <div>
                    <NavLink to='/yulia' className={classes.itemDialog} activeClassName={classes.activeDialog}>Yulia</NavLink>
                </div>
                <div>
                    <NavLink to='/sergey' className={classes.itemDialog} activeClassName={classes.activeDialog}>Sergey</NavLink>
                </div>
            </div>
            <div className={classes.dialogsMessages}>
                <div className={classes.messages}>Hi!</div>
                <div className={classes.messages}>How are you doing?</div>
                <div className={classes.messages}>Don't leave me onread, please...</div>
            </div>
        </div>
    )
};

export default Dialogs;