import React from "react";
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';
import { actionCreatorChangeMessageValue, actionCreatorSendMessage } from '../../redux/reducer_dialogs';

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {store => {
            let state = store.getState();
            console.log('state ', state);

            function addPost() {
                store.dispatch(actionCreatorSendMessage());
            }

            function changeValue(texts) {
                let action = actionCreatorChangeMessageValue(texts);
                store.dispatch(action);
            }

            return < Dialogs
                changeMessageValue={changeValue}
                sendMessage={addPost}
                dialogsPage={state}
            />
        }
        }
    </StoreContext.Consumer>
};

export default DialogsContainer;