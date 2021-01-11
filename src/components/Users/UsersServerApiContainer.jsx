import React from "react";
import Users from './Users';
import * as axios from 'axios';

class UsersServerApiContainer extends React.Component {
    componentDidMount = () => {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countUsersOnThePage}&page=${this.props.currentPage}`
        ).then(response => {
            console.log('data_2 ', response.data);
            this.props.setUsers(
                response.data.items
                // [{ id: 1, name: 'Anton', country: 'Russia', city: "Moscow", status: 'sunny day', followed: false },
                // { id: 2, name: 'Yulia', country: 'England', city: "London", status: 'looooser', followed: true }]
            );
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

export default UsersServerApiContainer;