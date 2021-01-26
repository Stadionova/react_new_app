import { act } from "@testing-library/react";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const reducer_auth = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { // возвращаю копию стэйта
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setUserAuthDataFromServer = (id, email, login) => { return { type: SET_USER_DATA, data: { id, email, login } }; }

export default reducer_auth;