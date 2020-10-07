import React from "react";
import MyPosts from './MyPosts';
import { actionCreatorAddPost } from '../../../redux/reducer_profile';
import { actionCreatorChangeValue } from '../../../redux/reducer_profile';
import store from "../../../redux/store";

const MyPostsContainer = (props) => {

    return (
        <MyContext.Consumer> {(store) => {
            let state = props.store.getState();

            function addPost() {
                props.store.dispatch(actionCreatorAddPost());
            }

            function changeValue(texts) {
                let action = actionCreatorChangeValue(texts);
                props.store.dispatch(action);
            }

            < MyPosts
                updateInputValue={changeValue}
                addPost={addPost}
                posts={state.dialogsState}
                newPostText={state.inputValue} />
        }
        }
        </MyContext.Consumer>
    )
};

export default MyPostsContainer;