import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    const newPost = React.createRef();

    const postsElements = props.posts.map((post) => {
        return <Post postNum={post.id} text={post.message} />
    });

    function onAddPost() {
        props.addPost();
    }

    function changeValue() {
        let texts = newPost.current.value;
        props.updateInputValue(texts);
    }

    return (
        <div className={classes.posts}>
            <div>My posts</div>
            <div>Create New Post</div>
            <div>
                <input value={props.inputValue} onChange={changeValue} ref={newPost} placeholder='write text here'></input>
            </div>
            <div>
                <button onClick={onAddPost}>Add Post</button>
                <button>Remove Post</button>
            </div>
            {postsElements}
        </div>
    )
};

export default MyPosts;