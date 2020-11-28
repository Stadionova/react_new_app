import React from "react";
import classes from "./Messages.module.css";
import { sendMessages, changeMessageValue } from '../../../redux/reducer_dialogs';

const Messages = (props) => {
    const newMessage = React.createRef();

    function sendMessage() {
        let action = sendMessages();
        props.dispatchSendNewMessage(action);
    }

    function updateInputValue(event) {
        let message = event.target.value;
        let action = changeMessageValue(message);
        props.dispatchChangeMessageValue(action);
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