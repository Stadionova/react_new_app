import React from "react";
import {
    followUserActionCreator, unfollowUserActionCreator,
    setUsersFromServer, setCurrentPageActionCreator,
    setTotalCountToPropsActionCreator
} from '../../redux/reducer_users';
import { connect } from 'react-redux';
import Users from './Users';
import * as axios from 'axios';

class UsersServerApiContainer extends React.Component {
    componentDidMount = () => {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countUsersOnThePage}&page=${this.props.currentPage}`
        ).then(response => {
            console.log('data ', response.data);
            this.props.setUsers(response.data.items);
            this.props.setTotalCountToProps(response.data.totalCount);
        });
    }
    clickHandler = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countUsersOnThePage}&page=${page}`).then(response => { this.props.setUsers(response.data.items); });
    }
    render = () => {
        let countOfThePages = Math.ceil(this.props.usersServerCount / this.props.countUsersOnThePage);
        let pagesCountArr = [];
        for (let i = 1; i <= countOfThePages; i++) {
            pagesCountArr.push(i);
        }
        return <Users
            clickHandler={this.clickHandler}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            pagesCountArr={pagesCountArr}
        />
    }
}

let mapStateToPropsPost = (state) => {
    // mapStateToPropsPost - функция, принимающая весь стэйт/стор целиком и 
    // возвращает только ту ветку из стора, 
    // с которой мы будем работать, в данном случае ветка reducer_users
    return {
        users: state.users.users,
        usersServerCount: state.users.usersServerCount,
        countUsersOnThePage: state.users.countUsersOnThePage,
        currentPage: state.users.currentPage
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
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage));
        },
        setTotalCountToProps: (usersServerCount) => {
            dispatch(setTotalCountToPropsActionCreator(usersServerCount));
        }
    }
}

const UsersContainer = connect(mapStateToPropsPost, mapDispatchToPropsPost)(UsersServerApiContainer);

export default UsersContainer;