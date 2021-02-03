import React from "react";
import {
    follow, unfollow,
    setUsers, setCurrentPage,
    setTotalCountToProps, setIsFetchingUsersFromServer,
    setIsFollowingProgress,
    getUsersThunkCreator
} from '../../redux/reducer_users';
import { connect } from 'react-redux';
import Users from './Users';
import { usersApi } from './../../api/api';
import Preloader from './../../common/Preloader/Preloader';

class UsersServerApiContainer extends React.Component {
    componentDidMount = () => {
        this.props.getUsersThunkCreator(this.props.countUsersOnThePage, this.props.currentPage);
    }
    clickHandler = (page) => {
        this.props.setIsFetchingUsersFromServer(true);
        this.props.setCurrentPage(page);
        usersApi.getUsers(this.props.countUsersOnThePage, page).then(data => {
            this.props.setUsers(data.items);
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
                followId={this.props.followId}
                isFollowing={this.props.isFollowing}
                setIsFollowingProgress={this.props.setIsFollowingProgress}
                getUsersThunkCreator={this.props.getUsersThunkCreator}
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
        isFetching: state.users.isFetching,
        isFollowing: state.users.isFollowing,
        followId: state.users.followId
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
    setIsFetchingUsersFromServer,
    setIsFollowingProgress,
    getUsersThunkCreator
})(UsersServerApiContainer);

export default UsersContainer;