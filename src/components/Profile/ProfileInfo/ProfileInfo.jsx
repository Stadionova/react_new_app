import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    } else {
        return (
            <div>
                <div className={classes.headlinePhoto}>
                    <img src="https://i.pinimg.com/originals/8d/a0/e6/8da0e64c0eb9b3e5185bb2945abfe616.jpg"></img>
                </div>
                <div className={classes.avatarAndDesc}>
                    <div>
                        <img src={props.profile.photos.large} alt="" />
                        <img src="https://sun9-62.userapi.com/impf/M_5mc_8rAIsbvkrObLVOfxpYIG2uKYGtNmZumQ/4P93DaoAG04.jpg?size=1500x1000&quality=96&proxy=1&sign=0e7a310424cc929770037da54bfa88a7&type=album"></img>
                    </div>
                    <div>Profile Description</div>
                </div>
            </div>
        )
    }
};

export default ProfileInfo;