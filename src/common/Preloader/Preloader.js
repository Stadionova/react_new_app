import React from "react";
import preloader from "./../../805.svg";
import classes from "./Preloader.module.css";

const Preloader = () => {
    return <div className={classes.preloaderClass}>
        <img className={classes.imageClass}
            src={preloader}>
        </img>
    </div >
};

export default Preloader;