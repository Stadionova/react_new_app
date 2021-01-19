import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsElements = props.posts.posts.map((post) => {
        return <Post
            remove={props.removePost}
            id={post.id}
            text={post.message}
            key={post.id} />
    });

    const newPost = React.createRef();

    function onAddPost() {
        let newId = props.posts.id;
        props.posts.id = newId + 1;
        props.addPost(props.posts.id);
        newPost.current.value = '';
    }

    function changeValue() {
        let texts = newPost.current.value;
        props.updateInputValue(texts);
    }

    return (
        <div className={classes.posts}>
            <div className={classes.title}>My posts</div>
            <div className={classes.inputAndButton}>
                <div>
                    <input value={props.newPostText} onChange={changeValue} ref={newPost} placeholder='write text here'></input>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            {postsElements}
        </div>
    )
};

export default MyPosts;