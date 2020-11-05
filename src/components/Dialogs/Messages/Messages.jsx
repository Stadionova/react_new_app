import React from "react";
import classes from "./Messages.module.css";
import { sendMessages, changeMessageValue } from '../../../redux/reducer_dialogs';

const Messages = (props) => {
    console.log('props_3 ', props);
    const newMessage = React.createRef();

    // function sendMessage() {
    //     console.log(2);
    //     let action = sendMessages();
    //     props.dispatchSendNewMessage(action);
    // }

    function updateInputValue(event) {
        console.log(1);
        let message = event.target.value;
        console.log('message ', message);
        let action = changeMessageValue(message);
        props.dispatchChangeMessageValue(action);
    }

    return (
        <div>
            <div className={classes.messages}>{props.message}</div>
            <input value={props.message} onChange={updateInputValue} ref={newMessage} type="text" />
            <button>Send NEW Message</button>
        </div>
    )
};

export default Messages;