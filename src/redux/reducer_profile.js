const ADD_POST = 'ADD_POST';
const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';

export default function reducer_profile(action, state) {
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