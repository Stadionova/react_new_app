import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <main>
            <ProfileInfo />
            <MyPosts
                messagesData={props.messagesData}
                addPost={props.addPost}
                inputValue={props.inputValue}
                updateInputValue={props.updateInputValue} />
        </main>
    )
};

export default Profile;