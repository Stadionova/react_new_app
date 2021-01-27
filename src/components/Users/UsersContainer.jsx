import React from "react";
import {
    follow, unfollow,
    setUsers, setCurrentPage,
    setTotalCountToProps, setIsFetchingUsersFromServer
} from '../../redux/reducer_users';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from './../../common/Preloader/Preloader';
import * as axios from 'axios';

class UsersServerApiContainer extends React.Component {
    componentDidMount = () => {
        this.props.setIsFetchingUsersFromServer(true);
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countUsersOnThePage}&page=${this.props.currentPage}`, {
            withCredentials: true
        }).then(response => {
            console.log('data ', response.data);
            this.props.setUsers(response.data.items);
            this.props.setTotalCountToProps(response.data.totalCount);
            this.props.setIsFetchingUsersFromServer(false);
        });
    }
    clickHandler = (page) => {
        this.props.setIsFetchingUsersFromServer(true);
        this.props.setCurrentPage(page);
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countUsersOnThePage}&page=${page}`, {
            withCredentials: true
        }).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setIsFetchingUsersFromServer(false);
        });
    }
    render = () => {
        let countOfThePages = Math.ceil(this.props.usersServerCount / this.props.countUsersOnThePage);
        let pagesCountArr = [];
        for (let i = 1; i <= countOfThePages; i++) {
            pagesCountArr.push(i);
        }
        return this.props.isFetching ? <Preloader /> :
            <Users
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
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
    }
}

// let mapDispatchToPropsPost = (dispatch) => {
//     return {
//         follow: (userId) => {
//             // мы вызываем в презентационной компоненте Users колбэк follow
//             // при клике на кнопку follow
//             // данные о том, что был совершён клик передаются в контэйнерную компоненту
//             // и уже только контэйнерная компонента диспатчит экшен в стор
//             dispatch(followUserActionCreator(userId));
//             // диспатчим колбэк (экшен криэйтор, котор возвращ экшен,
//             // так как диспатчить мы можем только экшен)
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowUserActionCreator(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersFromServer(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageActionCreator(currentPage));
//         },
//         setTotalCountToProps: (usersServerCount) => {
//             dispatch(setTotalCountToPropsActionCreator(usersServerCount));
//         },
//         setIsFetchingUsersFromServer: (status) => {
//             dispatch(setIsFetchingUsersFromServerActionCreator(status));
//         }
//     }
// }

const UsersContainer = connect(mapStateToPropsPost, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCountToProps,
    setIsFetchingUsersFromServer
})(UsersServerApiContainer);

export default UsersContainer;