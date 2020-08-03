import renderFunc from '../render';

let state = {
    dialogsState: [
        { id: 1, name: 'Anton', message: 'Hi, how are you doing?' },
        { id: 2, name: 'Sergey', message: 'Why did you leave me on read?' },
        { id: 3, name: 'Yulia', message: 'Ok, back off!' },
        { id: 4, name: 'Sveta', message: 'bye!' }
    ],
    messagesState: [
        { id: 1, name: 'Anton', message: 'Hi, how are you doing?' },
        { id: 2, name: 'Sergey', message: 'Why did you leave me on read?' },
        { id: 3, name: 'Yulia', message: 'Ok, back off!' }
    ],
    friends: [
        { id: 1, name: 'Sveta', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSu5ynOF_b8D1wg6ZAWc6IsMnEYlaXo8OBdYg&usqp=CAU' },
        { id: 2, name: 'Yura', avatar: 'https://zastavok.net/main/flowers/154988358280.jpg' },
        { id: 3, name: 'Yulia', avatar: 'https://st.depositphotos.com/1614195/1700/i/450/depositphotos_17008045-stock-photo-colorful-hearts.jpg' }
    ],
    inputValue: ''
}

export const addPost = () => {
    let newObj = {
        id: 5,
        name: 'Anna',
        message: state.inputValue
    };
    state.dialogsState.push(newObj);
    renderFunc(state);
};

export const updateInputValue = (text) => {
    state.inputValue = text;
    renderFunc(state);
};

export default state;