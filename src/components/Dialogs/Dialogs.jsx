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

    let messageElements = props.messages.map((message) => {
        return <Messages
            dispatchChangeMessageValue={props.changeMessageValue}
            dispatchSendNewMessage={props.sendMessage}
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
                {messageElements}
            </div>
            {/* <div>
                <div className={classes.messages}>{props.message}</div>
                <input value={props.message} onChange={updateInputValue} ref={newMessage} type="text" />
                <button onClick={sendMessage}>Send NEW Message</button>
            </div> */}
        </div>
    )
};

export default Dialogs;