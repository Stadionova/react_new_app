import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
    return <div><NavLink to={'/messages/1' + props.id} className={classes.itemDialog} activeClassName={classes.activeDialog}>{props.name}</NavLink></div>
};

const Messages = (props) => {
    return <div className={classes.messages}>{props.message}</div>
};

const dialogsData = [
    { id: 1, name: 'Anton', message: 'Hi, how are you doing?' },
    { id: 2, name: 'Sergey', message: 'Why did you leave me on read?' },
    { id: 3, name: 'Yulia', message: 'Ok, back off!' },
    { id: 4, name: 'Sveta', message: 'bye!' }
];


const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id} />
                <Dialog name={dialogsData[3].name} id={dialogsData[3].id} />
            </div>
            <div className={classes.dialogsMessages}>
                <Messages message={dialogsData[0].message} />
                <Messages message={dialogsData[1].message} />
                <Messages message={dialogsData[2].message} />
                <Messages message={dialogsData[3].message} />
            </div>
        </div>
    )
};

export default Dialogs;