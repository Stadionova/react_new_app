import React from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
    let dialogsElements = props.messages.map((message) => {
        const messageNew = [message.messageText];
        return <Dialog
            newProps={props}
            name={message.name}
            message={messageNew}
            id={message.id}
            key={message.id} />
    });

    if (!props.isAuth) {
        return <Redirect to={'/login'} />
    } else {
        return (
            <div className={classes.dialogs}>
                <div>My messages</div>
                <br />
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
            </div>
        )
    }

};

export default Dialogs;