const ADD_POST = 'ADD_POST';
const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';

let initialState = [
    { id: 1, name: 'Anton', message: 'Hi, how are you doing?' },
    { id: 2, name: 'Sergey', message: 'Why did you leave me on read?' },
    { id: 3, name: 'Yulia', message: 'Ok, back off!' },
    { id: 4, name: 'Sveta', message: 'bye!' }
];

export default function reducer_profile(state = initialState, action) {
    let stateCopy = [...state];
    if (action.type && action.type === ADD_POST) {
        let newObj = {
            id: 5,
            name: 'Anna',
            message: state.inputValue
        };
        stateCopy.push(newObj);
    } else if (action.type && action.type === UPDATE_INPUT_VALUE) {
        stateCopy.inputValue = action.text;
    }
    return stateCopy;
}

export const actionCreatorAddPost = () => {
    return { type: ADD_POST };
}

export const actionCreatorChangeValue = (texts) => {
    return { type: UPDATE_INPUT_VALUE, text: texts };
}