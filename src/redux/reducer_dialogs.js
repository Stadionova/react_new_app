const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGE_VALUE = 'UPDATE_MESSAGE_VALUE';

let initialState = [
    { id: 1, name: 'Anton', message: 'Hi, how are you doing?' }
];

export default function reducer_dialogs(state = initialState, action) {
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

export const actionCreatorSendMessage = () => {
    return { type: SEND_MESSAGE };
}

export const actionCreatorChangeMessageValue = (texts) => {
    return { type: UPDATE_MESSAGE_VALUE, text: texts };
}
