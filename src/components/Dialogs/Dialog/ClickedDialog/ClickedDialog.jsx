import React from "react";
import classes from "./ClickedDialog.module.css";
import Messages from "../../../Dialogs/Messages/Messages";

const ClickedDialog = (props) => {
    return (
        <div className={classes.post}>
            <div>
                <span className={classes.number}>{props.message}</span>
            </div>
            <Messages
                dispatchChangeMessageValue={props.propsForSendButton.changeMessageValue}
                dispatchSendNewMessage={props.propsForSendButton.sendMessage}
                key={props.propsForSendButton.messages.id} />
        </div>
    )
};

export default ClickedDialog;