const ADD_POST = 'ADD_POST';
const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
const REMOVE_POST = 'REMOVE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'hello', likesCount: 12 },
        { id: 2, message: 'hi', likesCount: 1 },
        { id: 3, message: 'how are you?', likesCount: 5 }
    ],
    newPostText: 'HELLO',
    profile: null,
    id: null
}

const reducer_profile = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.id,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_INPUT_VALUE:
            return { ...state, newPostText: action.text }
        case REMOVE_POST:
            return {
                ...state,
                users: state.posts.map((u, index) => {
                    if (u.id == action.id) {
                        state.posts.splice(index, 1);
                    }
                })
            }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        default:
            return state;
    }
}

export const changeValue = (texts) => { // пишу что-то в инпуте на вкладке Profile
    return { type: UPDATE_INPUT_VALUE, text: texts };
}

export const addPost = (newId) => { // нажимаю кнопку Add Post на вкладке Profile
    return { type: ADD_POST, id: newId };
}

export const removePost = (id) => { // нажимаю cross x на вкладке Profile
    return { type: REMOVE_POST, id: id };
}

export const setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile };
}

export default reducer_profile;