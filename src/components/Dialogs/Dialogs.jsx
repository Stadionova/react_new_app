import React from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";

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

    return (
        <div className={classes.dialogs}>
            <div>My messages</div>
            <br />
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
        </div>
    )
};

export default Dialogs;