import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

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
            <Post postNum='1. ' text='Hi, how are you doing?' />
            <Post postNum='2. ' text='Why did you leave me on read?' />
            <Post postNum='3. ' text='Ok, back off!' />
        </div>
    )
};

export default MyPosts;