import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const messagesData = [
    { id: 1, name: 'Anton', message: 'Hi, how are you doing?' },
    { id: 2, name: 'Sergey', message: 'Why did you leave me on read?' },
    { id: 3, name: 'Yulia', message: 'Ok, back off!' }
];

const MyPosts = () => {
    return (
        <div className={classes.posts}>
            <div>My posts</div>
            <div>Create New Post</div>
            <div>
                <input placeholder='write text here'></input>
            </div>
            <div>
                <button>Add Post</button>
                <button>Remove Post</button>
            </div>
            <Post postNum='1. ' text={messagesData[0].message} />
            <Post postNum='2. ' text={messagesData[1].message} />
            <Post postNum='3. ' text={messagesData[2].message} />
        </div>
    )
};

export default MyPosts;