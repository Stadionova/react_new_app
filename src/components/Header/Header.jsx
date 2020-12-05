import React from "react";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={`${classes.header} ${classes.headerSize}`}>
            <img src="https://www.publicdomainpictures.net/pictures/250000/velka/corazon-sobre-fondo-de-madera.jpg"></img>
            <div><i><span>Heart to Heart talks</span></i></div>
        </header>
    )
};

export default Header;