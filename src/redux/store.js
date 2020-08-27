import reducer_profile from './reducer_profile';
import reducer_dialogs from './reducer_dialogs';
import reducer_friends from './reducer_friends';

let store = {
    state: {
        dialogsState: [
            { id: 1, name: 'Anton', message: 'Hi, how are you doing?' },
            { id: 2, name: 'Sergey', message: 'Why did you leave me on read?' },
            { id: 3, name: 'Yulia', message: 'Ok, back off!' },
            { id: 4, name: 'Sveta', message: 'bye!' }
        ],
        messagesState: [
            { id: 1, name: 'Anton', message: 'Hi, how are you doing?' }
        ],
        friends: [
            { id: 1, name: 'Sveta', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSu5ynOF_b8D1wg6ZAWc6IsMnEYlaXo8OBdYg&usqp=CAU' },
            { id: 2, name: 'Yura', avatar: 'https://zastavok.net/main/flowers/154988358280.jpg' },
            { id: 3, name: 'Yulia', avatar: 'https://st.depositphotos.com/1614195/1700/i/450/depositphotos_17008045-stock-photo-colorful-hearts.jpg' }
        ],
        inputValue: '',
        messageValue: ''
    },
    getState() {
        return this.state;
    },
    subscribe(observer) {
        this.renderFunc = observer;
    },
    renderFunc() {
        console.log('state was changed');
    },
    dispatch(action) {
        this.state.dialogsState = reducer_profile(this.state.dialogsState, action);
        this.state.messagesState = reducer_dialogs(this.state.messagesState, action);
        this.state.friends = reducer_friends(this.state.friends, action);
        this.renderFunc(this.state);
    }
}

export default store;