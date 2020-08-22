import React from "react";
import classes from "./Messages.module.css";
import { actionCreatorSendMessage } from '../../../redux/state';
import { actionCreatorChangeMessageValue } from '../../../redux/state';

const Messages = (props) => {

    const newMessage = React.createRef();

    function sendNewMessage() {
        props.dispatch(actionCreatorSendMessage());
    }

    function changeMessageValue() {
        let message = newMessage.current.value;
        let action = actionCreatorChangeMessageValue(message);
        props.dispatch(action);
    }

    return (
        <div>
            <div className={classes.messages}>{props.message}</div>
            <input value={props.messageValue} onChange={changeMessageValue} ref={newMessage} type="text" />
            <button onClick={sendNewMessage}>Send NEW Message</button>
        </div>
    )
};

export default Messages;