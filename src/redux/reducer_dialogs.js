const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGE_VALUE = 'UPDATE_MESSAGE_VALUE';

let initialState = [
    { id: 1, name: 'Anton', message: 'Hi, how are you doing?' }
];

const reducer_dialogs = (state = initialState, action) => {
    let stateCopy = [...state];
    let previousPostId = stateCopy.length;
    let nextPostId = previousPostId + 1;
    console.log('state.inputValue reducer_dialogs', state.inputValue);
    if (action.type && action.type === SEND_MESSAGE) {
        let newObj = {
            id: nextPostId,
            name: 'Anna',
            message: state.inputValue
        };
        stateCopy.push(newObj);
        console.log('stateCopy reducer_dialogs', stateCopy);
    } else if (action.type && action.type === UPDATE_MESSAGE_VALUE) {
        stateCopy.inputValue = action.text;
    }
    return stateCopy;
}

export const changeMessageValue = (texts) => {
    return { type: UPDATE_MESSAGE_VALUE, text: texts };
}

export const sendMessages = () => {
    return { type: SEND_MESSAGE };
}

export default reducer_dialogs;