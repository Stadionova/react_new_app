import reducer_profile from './reducer_profile';
import reducer_dialogs from './reducer_dialogs';

const ADD_POST = 'ADD_POST';
const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGE_VALUE = 'UPDATE_MESSAGE_VALUE';


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
    passState(observer) {
        this.renderFunc = observer;
    },
    renderFunc() {
        console.log('state was changed');
    },
    dispatch(action) {
        this.state.dialogsState = reducer_profile(action, this.state.dialogsState);
        this.state.messagesState = reducer_dialogs(action, this.state.messagesState);
        this.renderFunc(this.state);
    }
}

export const actionCreatorAddPost = () => {
    return { type: ADD_POST };
}

export const actionCreatorChangeValue = (texts) => {
    return { type: UPDATE_INPUT_VALUE, text: texts };
}

export const actionCreatorSendMessage = () => {
    return { type: SEND_MESSAGE };
}

export const actionCreatorChangeMessageValue = (texts) => {
    return { type: UPDATE_MESSAGE_VALUE, text: texts };
}

export default store;