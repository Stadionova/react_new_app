import React from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    let dialogsElements = props.messages.map((message) => {
        const messageNew = [message.messageText];
        return <Dialog
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
            <div className={classes.dialogsMessages}>
                <Messages
                    dispatchChangeMessageValue={props.changeMessageValue}
                    dispatchSendNewMessage={props.sendMessage}
                    key={props.messages.id} />
            </div>
        </div>
    )
};

export default Dialogs;