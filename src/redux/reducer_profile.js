const ADD_POST = 'ADD_POST';
const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';

let initialState = [
    { id: 1, name: 'Anton', message: 'Hi, how are you doing?' },
    { id: 2, name: 'Sergey', message: 'Why did you leave me on read?' },
    { id: 3, name: 'Yulia', message: 'Ok, back off!' },
    { id: 4, name: 'Sveta', message: 'bye!' }
];

export default function reducer_profile(action, state = initialState) {
    if (action.type === ADD_POST) {
        let newObj = {
            id: 5,
            name: 'Anna',
            message: state.inputValue
        };
        console.log('state ', state);
        state.push(newObj);
    } else if (action.type === UPDATE_INPUT_VALUE) {
        state.inputValue = action.text;
    }
    return state;
}

export const actionCreatorAddPost = () => {
    return { type: ADD_POST };
}

export const actionCreatorChangeValue = (texts) => {
    return { type: UPDATE_INPUT_VALUE, text: texts };
}