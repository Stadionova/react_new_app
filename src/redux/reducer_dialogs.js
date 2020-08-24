const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGE_VALUE = 'UPDATE_MESSAGE_VALUE';

export default function reducer_dialogs(action, state) {
    if (action.type === SEND_MESSAGE) {
        let messageText = {
            id: 5,
            name: 'Anna',
            message: state.messageValue
        };
        state.push(messageText);
    } else if (action.type === UPDATE_MESSAGE_VALUE) {
        state.messageValue = action.text;
    }
    return state;
}