import React from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

    console.log('props ', props);

    let dialogsElements = props.dialogsPage.map((dialog) => {
        return <Dialog
            name={dialog.name}
            id={dialog.id}
            key={dialog.id} />
    });

    let messageElements = props.dialogsPage.map((dialogMessage) => {
        return <Messages
            message={dialogMessage.message}
            dispatchChangeMessageValue={props.changeMessageValue}
            dispatchSendNewMessage={props.sendMessage}
            key={dialogMessage.id} />
    });

    return (
        <div className={classes.dialogs}>
            <div>My messages</div>
            <br />
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