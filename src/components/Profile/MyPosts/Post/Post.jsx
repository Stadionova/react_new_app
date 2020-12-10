import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    function onRemovePost() {
        props.remove();
    }

    return (
        <div className={classes.post}>
            <div>
                <span className={classes.number}>{props.id}</span>
                <span className={classes.postText}>{props.text}</span>
                <button onClick={onRemovePost}>&#215;</button>
            </div>
        </div>
    )
};

export default Post;