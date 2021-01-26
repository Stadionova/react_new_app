import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={`${classes.header} ${classes.headerSize}`}>
            <img src="https://www.publicdomainpictures.net/pictures/250000/velka/corazon-sobre-fondo-de-madera.jpg"></img>
            <div><i><span>Heart to Heart talks</span></i></div>
            <div className={`${classes.login}`}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header;