import React from "react";
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';
import { actionCreatorChangeValue, actionCreatorAddPost } from '../../../redux/reducer_profile';

const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {store => {
            let state = store.getState();

            function addPost() {
                store.dispatch(actionCreatorAddPost());
            }

            function changeValue(texts) {
                let action = actionCreatorChangeValue(texts);
                store.dispatch(action);
            }

            return < MyPosts
                updateInputValue={changeValue}
                addPost={addPost}
                posts={state.dialogsState}
                newPostText={state.inputValue} />
        }
        }
    </StoreContext.Consumer>
};

export default MyPostsContainer;