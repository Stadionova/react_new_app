import React from "react";
import classes from "./Messages.module.css";
import { actionCreatorSendMessage, actionCreatorChangeMessageValue } from '../../../redux/reducer_dialogs';

const Messages = (props) => {

    const newMessage = React.createRef();

    function sendNewMessage() {
        console.log('click send message');
        let action = actionCreatorSendMessage();
        props.dispatchSendNewMessage(action);
    }

    function changeMessageValue(event) {
        let message = event.target.value;
        console.log('message ', message);
        let action = actionCreatorChangeMessageValue(message);
        props.dispatchChangeMessageValue(action);
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