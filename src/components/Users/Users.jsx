import React from "react";
import classes from "./Users.module.css";

const Users = (props) => {
    return <div>
        {
            props.users.map(u => { //props.users передаём через функцию mapStateToProps в контейнерной компоненте
                return <div key={u.id} className={classes.user}>
                    <span>FOLLOW</span>
                </div>
            })
        }
    </div>
};

export default Users;