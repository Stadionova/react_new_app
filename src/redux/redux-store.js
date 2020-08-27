import { createStore, combineReducers } from 'redux';
import reducer_profile from './reducer_profile';
import reducer_dialogs from './reducer_dialogs';
import reducer_friends from './reducer_friends';

let reducers = combineReducers({
    dialogsState: reducer_profile,
    messagesState: reducer_dialogs,
    friends: reducer_friends
});

let store = createStore(reducers);

export default store;