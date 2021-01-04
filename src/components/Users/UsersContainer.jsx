import React from "react";
import Users from './Users';
import { followUserActionCreator, unfollowUserActionCreator, setUsersFromServer } from '../../redux/reducer_users';
import { connect } from 'react-redux';

let mapStateToPropsPost = (state) => {
    // mapStateToPropsPost - функция, принимающая весь стэйт/стор целиком и 
    // возвращает только ту ветку из стора, 
    // с которой мы будем работать, в данном случае ветка reducer_users
    return {
        users: state.users.users
    }
}

let mapDispatchToPropsPost = (dispatch) => {
    return {
        follow: (userId) => {
            // мы вызываем в презентационной компоненте Users колбэк follow
            // при клике на кнопку follow
            // данные о том, что был совершён клик передаются в контэйнерную компоненту
            // и уже только контэйнерная компонента диспатчит экшен в стор
            dispatch(followUserActionCreator(userId));
            // диспатчим колбэк (экшен криэйтор, котор возвращ экшен,
            // так как диспатчить мы можем только экшен)
        },
        unfollow: (userId) => {
            dispatch(unfollowUserActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersFromServer(users));
        }
    }
}

const UsersContainer = connect(mapStateToPropsPost, mapDispatchToPropsPost)(Users);

export default UsersContainer;