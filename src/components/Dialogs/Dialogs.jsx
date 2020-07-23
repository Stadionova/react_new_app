import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
    return <div><NavLink to={'/messages/1' + props.id} className={classes.itemDialog} activeClassName={classes.activeDialog}>{props.name}</NavLink></div>
};

const Messages = (props) => {
    return <div className={classes.messages}>{props.message}</div>
};

const dialogsData = [
    { id: 1, name: 'Anton', message: 'Hi, how are you doing?' },
    { id: 2, name: 'Sergey', message: 'Why did you leave me on read?' },
    { id: 3, name: 'Yulia', message: 'Ok, back off!' },
    { id: 4, name: 'Sveta', message: 'bye!' }
];

let dialogsElements = dialogsData.map((dialog) => {
    return <Dialog name={dialog.name} id={dialog.id} />
});

let messageElements = dialogsData.map((dialogMessage) => {
    return <Messages message={dialogMessage.message} />
});

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.dialogsMessages}>
                {messageElements}
            </div>
        </div>
    )
};

export default Dialogs;