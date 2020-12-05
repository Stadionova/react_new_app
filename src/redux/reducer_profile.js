const ADD_POST = 'ADD_POST';
const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
const REMOVE_POST = 'REMOVE_POST';

let initialState = [];

const reducer_profile = (state = initialState, action) => {
    let stateCopy = [...state];
    let previousPostId = stateCopy.length;
    let nextPostId = previousPostId + 1;
    if (action.type && action.type === ADD_POST) {
        let newObj = {
            id: nextPostId,
            message: state.inputValue
        };
        stateCopy.push(newObj);
    } else if (action.type && action.type === UPDATE_INPUT_VALUE) {
        stateCopy.inputValue = action.text;
    } else if (action.type && action.type === REMOVE_POST) {
        stateCopy.splice(stateCopy.id, 1);
    }
    return stateCopy;
}

export const changeValue = (texts) => { // пишу что-то в инпуте на вкладке Profile
    return { type: UPDATE_INPUT_VALUE, text: texts };
}

export const addPost = () => { // нажимаю кнопку Add Post на вкладке Profile
    return { type: ADD_POST };
}

export const removePost = () => { // нажимаю cross x на вкладке Profile
    return { type: REMOVE_POST };
}

export default reducer_profile;