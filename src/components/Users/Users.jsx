import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Users.module.css";
import * as axios from 'axios';

const Users = (props) => {
    return <div>
        <div className={classes.pagination}>
            {props.pagesCountArr.map(page => {
                return <span onClick={() => { props.clickHandler(page) }}
                    className={page == props.currentPage && classes.selectedCurrentPage}>
                    {page + ' '}
                </span>;
            })}
        </div>
        {props.users.map(u => { // props.users передаём через функцию mapStateToProps в контейнерной компоненте
            return (
                <div key={u.id} className={classes.user}>
                    {u.followed ?
                        <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '3611a460-0cbe-4609-be7d-da43d8f91c2e'
                                }
                            }).then(response => {
                                if (response.data.resultCode == 0) {
                                    props.follow(u.id);
                                }
                            });
                        }}>
                            FOLLOW
                                    </button> :
                        <button
                            onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '3611a460-0cbe-4609-be7d-da43d8f91c2e'
                                    }
                                }).then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(u.id);
                                    }
                                });
                            }}>
                            UNFOLLOW
                                    </button>}
                    <div className={classes.photoSmall}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small ? u.photos.small : 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'}>{u.photos.small && u.photos.small}</img>
                            </NavLink>
                        </div>
                    </div>
                    <div className={classes.nameAndStatus}>
                        <div><span>{u.name}</span></div>
                        <div><span>{u.status}</span></div>
                    </div>
                    <div className={classes.countryAndCity}>
                        <div><span>{'u.country'}</span></div>
                        <div><span>{'u.city'}</span></div>
                    </div>
                </div>
            )
        })}
    </div >
};

export default Users;