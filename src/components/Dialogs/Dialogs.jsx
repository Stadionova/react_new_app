import React from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.map((dialog) => {
        return <Dialog
            name={dialog.name}
            id={dialog.id}
            key={dialog.id} />
    });

    let messageElements = props.dialogsPage.map((dialogMessage) => {
        return <Messages
            message={dialogMessage.message}
            dispatch={props.sendMessage}
            key={dialogMessage.id} />
    });

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