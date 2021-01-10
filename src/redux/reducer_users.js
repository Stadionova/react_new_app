const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

let initialState = {
    users: [],
    usersServerCount: 0,
    countUsersOnThePage: 5,
    currentPage: 3
}

const reducer_users = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return { // возвращаю копию стэйта
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false } // делаю копию users и меняю свойство followed на тру
                    }
                    return u;
                })
            }
        case UNFOLLOW_USER:
            return { // возвращаю копию стэйта
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true } // делаю копию users и меняю свойство followed на фолс
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_COUNT:
            return { ...state, usersServerCount: action.usersServerCount }
        default:
            return state;
    }
}

export const followUserActionCreator = (userId) => { // actionCreator function which return action
    return { type: FOLLOW_USER, userId };
}

export const unfollowUserActionCreator = (userId) => {
    return { type: UNFOLLOW_USER, userId };
}

export const setUsersFromServer = (users) => {
    return { type: SET_USERS, users };
}

export const setCurrentPageActionCreator = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage };
}

export const setTotalCountToPropsActionCreator = (usersServerCount) => {
    return { type: SET_TOTAL_COUNT, usersServerCount };
}

export default reducer_users;