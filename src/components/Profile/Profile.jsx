import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { Redirect } from "react-router-dom";

const Profile = (props) => {
    if (!props.isAuth) {
        return <Redirect to={'/login'} />
    } else {
        return (
            <main>
                <ProfileInfo profile={props.profile} />
                <MyPostsContainer profile={props.profile} />
            </main>
        )
    }
};

export default Profile;