import React from "react";
import Dialogs from './Dialogs';
import { actionCreatorAddPost } from '../../../redux/reducer_profile';
import { actionCreatorChangeValue } from '../../../redux/reducer_profile';
import store from "../../../redux/store";

const DialogsContainer = (props) => {
    return (
        <MyContext.Consumer> {
            (store) => {
                let state = props.store.getState();

                function addPost() {
                    props.store.dispatch(actionCreatorAddPost());
                }

                function changeValue(texts) {
                    let action = actionCreatorChangeValue(texts);
                    props.store.dispatch(action);
                }

                < Dialogs
                    updateInputValue={changeValue}
                    addPost={addPost}
                    posts={state.dialogsState}
                    newPostText={state.inputValue} />
            }
        }
        </MyContext.Consumer>
    )
};

export default DialogsContainer;