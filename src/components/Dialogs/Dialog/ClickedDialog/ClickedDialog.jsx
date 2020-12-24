import React from "react";
import classes from "./ClickedDialog.module.css";
import Messages from "../../../Dialogs/Messages/Messages";

const ClickedDialog = (props) => {
    return (
        <div className={classes.post}>
            <span className={classes.number}>{props.message}</span>
            <Messages
                changeValue={props.newProps.changeMessageValue}
                sendNewMessage={props.newProps.sendMessage}
                key={props.newProps.messages.id} />
        </div>
    )
};

export default ClickedDialog;