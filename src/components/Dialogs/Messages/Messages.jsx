import React from "react";
import classes from "./Messages.module.css";

const Messages = (props) => {

    const newMessage = React.createRef();

    function showNewMessage() {
        let message = newMessage.current.value;
        console.log('message ', message);
    }

    return (
        <div>
            <div className={classes.messages}>{props.message}</div>
            <input ref={newMessage} type="text" />
            <button onClick={showNewMessage}>Show NEW Message</button>
        </div>
    )
};

export default Messages;