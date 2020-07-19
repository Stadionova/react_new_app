import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
    return <div><NavLink to={'/messages/1' + props.id} className={classes.itemDialog} activeClassName={classes.activeDialog}>{props.name}</NavLink></div>
};

const Messages = (props) => {
    return <div className={classes.messages}>{props.message}</div>
};

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <Dialog name='Anton' id='1' />
                <Dialog name='Sveta' id='2' />
                <Dialog name='Yulia' id='3' />
                <Dialog name='Sergey' id='4' />
            </div>
            <div className={classes.dialogsMessages}>
                <Messages message='Hi!' />
                <Messages message='How are you doing?' />
                <Messages message='Do not leave me onread, please...' />
                <Messages message='ok, back off!' />
            </div>
        </div>
    )
};

export default Dialogs;