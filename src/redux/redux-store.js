import { createStore, combineReducers } from 'redux';
import reducer_profile from './reducer_profile';
import reducer_dialogs from './reducer_dialogs';

let reducers = combineReducers({
    dialogsState: reducer_profile,
    messagesState: reducer_dialogs
});

let store = createStore(reducers);

export default store;