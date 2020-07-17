import React from "react";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={`${classes.header} ${classes.headerSize}`}>
            HEADER
            <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/line_style_2.png"></img>
        </header>
    )
};

export default Header;