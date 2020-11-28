import React from "react";
import classes from "./Messages.module.css";

const Messages = (props) => {
    const newMessage = React.createRef();

    function sendMessage() {
        props.dispatchSendNewMessage();
        newMessage.current.value = '';
    }

    function updateInputValue() {
        let message = newMessage.current.value;
        props.dispatchChangeMessageValue(message);
    }

    return (
        <div>
            <div className={classes.messages}>{props.message}</div>
            <input value={props.message} onChange={updateInputValue} ref={newMessage} type="text" />
            <button onClick={sendMessage}>Send NEW Message</button>
        </div>
    )
};

export default Messages;