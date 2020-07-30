import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    function addPost() {
        console.log(1);
    }

    const postsElements = props.messagesData.map((post) => {
        return <Post postNum={post.id} text={post.message} />
    });

    return (
        <div className={classes.posts}>
            <div>My posts</div>
            <div>Create New Post</div>
            <div>
                <input placeholder='write text here'></input>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
                <button>Remove Post</button>
            </div>
            {postsElements}
        </div>
    )
};

export default MyPosts;