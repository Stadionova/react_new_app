import React from "react";
import MyPosts from './MyPosts';
import { actionCreatorAddPost } from '../../../redux/reducer_profile';
import { actionCreatorChangeValue } from '../../../redux/reducer_profile';

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    function addPost() {
        props.store.dispatch(actionCreatorAddPost());
    }

    function changeValue(texts) {
        let action = actionCreatorChangeValue(texts);
        props.store.dispatch(action);
    }

    return (
        < MyPosts
            updateInputValue={changeValue}
            addPost={addPost}
            posts={state.dialogsState}
            newPostText={state.inputValue} />
    )
};

export default MyPostsContainer;