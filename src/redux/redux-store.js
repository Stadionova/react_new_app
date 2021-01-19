import { createStore, combineReducers } from 'redux';
import reducer_profile from './reducer_profile';
import reducer_dialogs from './reducer_dialogs';
import reducer_friends from './reducer_friends';
import reducer_users from './reducer_users';

let reducers = combineReducers({
    dialogsState: reducer_profile,
    messagesState: reducer_dialogs,
    friends: reducer_friends,
    users: reducer_users // ветка в сторе
});

let store = createStore(reducers); // создаю стор с помощью функции createStore

window.store = store;

export default store;