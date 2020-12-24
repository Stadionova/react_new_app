import React from "react";
import classes from "./Messages.module.css";

const Messages = (props) => {
    const newMessage = React.createRef();

    function sendMessage() {
        let message = newMessage.current.value;
        if (message.length > 0) {
            let pattern = /^[\s]+$/;
            if (!pattern.test(message)) {
                props.sendNewMessage();
                newMessage.current.value = '';
            }
        }
    }

    function updateInputValue() {
        let message = newMessage.current.value;
        props.changeValue(message);
    }

    return (
        <div className={classes.inputAndButton}>
            <input value={props.message} onChange={updateInputValue} ref={newMessage} type="text" />
            <button onClick={sendMessage}>Send NEW Message</button>
        </div>
    )
};

export default Messages;