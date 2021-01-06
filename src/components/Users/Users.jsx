import React from "react";
import classes from "./Users.module.css";
import * as axios from 'axios';

const Users = (props) => {
    if (props.users.length === 0) {
        // https://social-network.samuraijs.com/docs# (docs for server api)
        // https://social-network.samuraijs.com/api/1.0 (base server api without endpoint, делать get запрос сюда
        // дописать в конце ресурс /users)
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            console.log('data ', response.data.items);
            props.setUsers(
                response.data.items
                // [{ id: 1, name: 'Anton', country: 'Russia', city: "Moscow", status: 'sunny day', followed: false },
                // { id: 2, name: 'Yulia', country: 'England', city: "London", status: 'looooser', followed: true }]
            );
        });
    }
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