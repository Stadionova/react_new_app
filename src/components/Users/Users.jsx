import React from "react";
import classes from "./Users.module.css";

const Users = (props) => {
    return <div>
        {
            props.users.map(u => { // props.users передаём через функцию mapStateToProps в контейнерной компоненте
                return (
                    <div key={u.id} className={classes.user}>
                        {u.followed ?
                            <button onClick={() => { props.follow(u.id) }}>FOLLOW</button> :
                            <button onClick={() => { props.unfollow(u.id) }}>UNFOLLOW</button>}
                        <div className={classes.nameAndStatus}>
                            <div><span>{u.name}</span></div>
                            <div><span>{u.status}</span></div>
                        </div>
                        <div className={classes.countryAndCity}>
                            <div><span>{u.country}</span></div>
                            <div><span>{u.city}</span></div>
                        </div>
                    </div>
                )
            })
        }
    </div>
};

export default Users;