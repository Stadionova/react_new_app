import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Users.module.css";
import { usersApi } from './../../api/api';

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
                            usersApi.unfollow(u.id).then(response => {
                                (response.data.resultCode == 0) && props.unfollow(u.id);
                            });
                        }}>UNFOLLOW</button>
                        :
                        <button onClick={() => {
                            usersApi.follow(u.id).then(response => {
                                (response.data.resultCode == 0) && props.follow(u.id);
                            });
                        }}>FOLLOW</button>
                    }
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