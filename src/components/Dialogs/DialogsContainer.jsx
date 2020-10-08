import React from "react";
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';
import { actionCreatorChangeMessageValue, actionCreatorSendMessage } from '../../../redux/reducer_dialogs';

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer> {
            (store) => {
                let state = store.getState();

                function addPost() {
                    store.dispatch(actionCreatorSendMessage());
                }

                function changeValue(texts) {
                    let action = actionCreatorChangeMessageValue(texts);
                    store.dispatch(action);
                }

                < Dialogs
                    changeMessageValue={changeValue}
                    sendMessage={addPost}
                    dialogsPage={state}
                />
            }
        }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;