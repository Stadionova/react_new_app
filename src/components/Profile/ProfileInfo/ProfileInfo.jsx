import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.headlinePhoto}>
                <img src="https://zelenyjmir.ru/wp-content/uploads/2017/06/Pingvin-19.jpg"></img>
            </div>
            <div className={classes.avatarAndDesc}>
                <div>
                    <img src="https://99px.ru/sstorage/56/2019/09/mid_324597_239159.jpg"></img>
                </div>
                <div>Profile Description</div>
            </div>
        </div>
    )
};

export default ProfileInfo;