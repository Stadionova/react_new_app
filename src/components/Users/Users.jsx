import React from "react";
import classes from "./Users.module.css";

const Users = (props) => {
    console.log('props ', props);
    return <div>
        {
            props.users.map(u => {//props.users передаём через функцию mapStateToProps в контейнерной компоненте
                return <div key={u.id}>
                    <span>FOLLOW</span>
                </div>
            })
        }
    </div>
    // < div className = { classes.music } > USERS PAGE</div >
};

export default Users;