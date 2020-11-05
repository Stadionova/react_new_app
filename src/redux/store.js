import reducer_profile from './reducer_profile';
import reducer_dialogs from './reducer_dialogs';
import reducer_friends from './reducer_friends';

let store = {
    dispatch(action) {
        this.state.profilePage.dialogsState = reducer_profile(this.state.profilePage.dialogsState, action);
        this.state.messagesState = reducer_dialogs(this.state.messagesState, action);
        this.state.friends = reducer_friends(this.state.friends, action);
    }
}

export default store;