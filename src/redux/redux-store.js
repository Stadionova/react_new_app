import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer_profile from './reducer_profile';
import reducer_dialogs from './reducer_dialogs';
import reducer_friends from './reducer_friends';
import reducer_users from './reducer_users';
import reducer_auth from './reducer_auth';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    dialogsState: reducer_profile,
    messagesState: reducer_dialogs,
    friends: reducer_friends,
    users: reducer_users, // ветка в сторе
    auth: reducer_auth
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware)); // создаю стор с помощью функции createStore

window.store = store;

export default store;