import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    function onRemovePost(event) {
        props.remove(event.target.id);
    }

    return (
        <div className={classes.post}>
            <div>
                <span className={classes.number}>{props.id}</span>
                <span className={classes.postText}>{props.text}</span>
                <button id={props.id} onClick={onRemovePost}>&#215;</button>
            </div>
        </div>
    )
};

export default Post;