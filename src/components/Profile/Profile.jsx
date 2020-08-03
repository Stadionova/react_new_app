import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <main>
            <ProfileInfo />
            <MyPosts messagesData={props.messagesData} addPost={props.addPost} inputValue={props.inputValue} />
        </main>
    )
};

export default Profile;