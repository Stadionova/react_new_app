import React from "react";
import classes from "./Messages.module.css";
import { actionCreatorSendMessage, actionCreatorChangeMessageValue } from '../../../redux/reducer_dialogs';

const Messages = (props) => {
    const newMessage = React.createRef();

    function sendMessage() {
        let action = actionCreatorSendMessage();
        props.dispatchSendNewMessage(action);
    }

    function updateInputValue(event) {
        let message = event.target.value;
        let action = actionCreatorChangeMessageValue(message);
        props.dispatchChangeMessageValue(action);
    }

    return (
        <div>
            <div className={classes.messages}>{props.message}</div>
            <input value={props.messageValue} onChange={updateInputValue} ref={newMessage} type="text" />
            <button onClick={sendMessage}>Send NEW Message</button>
        </div>
    )
};

export default Messages;