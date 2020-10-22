const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGE_VALUE = 'UPDATE_MESSAGE_VALUE';

let initialState = [
    { id: 1, name: 'Anton', message: 'Hi, how are you doing?' }
];

const reducer_dialogs = (state = initialState, action) => {
    let stateCopy = [...state];
    if (action.type && action.type === SEND_MESSAGE) {
        let messageText = {
            id: 5,
            name: 'Anna',
            message: state.messageValue
        };
        stateCopy.push(messageText);
    } else if (action.type && action.type === UPDATE_MESSAGE_VALUE) {
        stateCopy.messageValue = action.text;
    }
    return stateCopy;
}

export const actionCreatorChangeMessageValue = (texts) => {
    console.log(4);
    return { type: UPDATE_MESSAGE_VALUE, text: texts };
}

export const actionCreatorSendMessage = () => {
    console.log(3);
    return { type: SEND_MESSAGE };
}

export default reducer_dialogs;