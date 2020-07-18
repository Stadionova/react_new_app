import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div>
                <span className={classes.number}>{props.postNum}</span>
                <span className={classes.postText}>{props.text}</span>
            </div>
        </div>
    )
};

export default Post;