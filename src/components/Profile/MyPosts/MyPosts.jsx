import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { actionCreatorAddPost } from '../../../redux/state';
import { actionCreatorChangeValue } from '../../../redux/state';

const MyPosts = (props) => {

    const newPost = React.createRef();

    function addPost() {
        props.dispatch(actionCreatorAddPost());
    }

    function changeValue() {
        let texts = newPost.current.value;
        let action = actionCreatorChangeValue(texts);
        props.dispatch(action);
    }

    const postsElements = props.messagesData.map((post) => {
        return <Post postNum={post.id} text={post.message} />
    });

    return (
        <div className={classes.posts}>
            <div>My posts</div>
            <div>Create New Post</div>
            <div>
                <input value={props.inputValue} onChange={changeValue} ref={newPost} placeholder='write text here'></input>
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