const ADD_POST = 'ADD_POST';
const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';

let initialState = [
    { id: 1, name: 'Anton', message: 'Hi, how are you doing?' },
    { id: 2, name: 'Sergey', message: 'Why did you leave me on read?' },
    { id: 3, name: 'Yulia', message: 'Ok, back off!' },
    { id: 4, name: 'Sveta', message: 'bye!' }
];

const reducer_profile = (state = initialState, action) => {
    let stateCopy = [...state];
    let previousPostId = stateCopy.length;
    let nextPostId = previousPostId + 1;
    if (action.type && action.type === ADD_POST) {
        let newObj = {
            id: nextPostId,
            name: 'Anna',
            message: state.inputValue
        };
        stateCopy.push(newObj);
    } else if (action.type && action.type === UPDATE_INPUT_VALUE) {
        stateCopy.inputValue = action.text;
    }
    return stateCopy;
}

export const actionCreatorChangeValue = (texts) => { // пишу что-то в инпуте на вкладке Profile
    return { type: UPDATE_INPUT_VALUE, text: texts };
}

export const actionCreatorAddPost = () => { // нажимаю кнопку Add Post на вкладке Profile
    return { type: ADD_POST };
}

export default reducer_profile;