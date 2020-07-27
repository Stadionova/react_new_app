import React from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
    return (
        <nav className={classes.navigation}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/messages' activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/friends' activeClassName={classes.activeLink}>Friends</NavLink>
                <br />
                <div className={classes.avatars}>
                    <NavLink to='/Sveta' activeClassName={classes.activeLink}>
                        <div>{props.friends[0].name}</div>
                        <img className={classes.avatar} src={props.friends[0].avatar} alt="Sveta" />
                    </NavLink>
                    <NavLink to='/Yura' activeClassName={classes.activeLink}>
                        <div>{props.friends[1].name}</div>
                        <img className={classes.avatar} src={props.friends[1].avatar} alt="Yura" />
                    </NavLink>
                    <NavLink to='/Yulia' activeClassName={classes.activeLink}>
                        <div>{props.friends[2].name}</div>
                        <img className={classes.avatar} src={props.friends[2].avatar} alt="Yulia" />
                    </NavLink>
                </div>
            </div>
        </nav>
    )
};

export default Navigation;