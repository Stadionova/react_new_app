import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    // console.log('props ', props);
    function onRemovePost() {
        props.remove();
        // newPost.current.value = '';
    }

    return (
        <div className={classes.post}>
            <div>
                <span className={classes.number}>{props.id}</span>
                <span className={classes.postText}>{props.text}</span>
                <button onClick={onRemovePost}>x</button>
            </div>
        </div>
    )
};

export default Post;