import React from "react";
import classes from "./Users.module.css";
import * as axios from 'axios';

class Users extends React.Component {
    // showMoreUsers = () => {
    //     if (this.props.users.length === 0) {
    //         // https://social-network.samuraijs.com/docs# (docs for server api)
    //         // https://social-network.samuraijs.com/api/1.0 (base server api without endpoint, делать get запрос сюда
    //         // дописать в конце ресурс /users)
    //     }
    // }
    componentDidMount = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            console.log('data_2 ', response.data.items);
            this.props.setUsers(
                response.data.items
                // [{ id: 1, name: 'Anton', country: 'Russia', city: "Moscow", status: 'sunny day', followed: false },
                // { id: 2, name: 'Yulia', country: 'England', city: "London", status: 'looooser', followed: true }]
            );
        });
    }
    render = () => {
        let countOfThePages = this.props.usersServerCount / this.props.countUsersOnThePage;
        let pagesCountArr = [];
        for (let i = 1; i <= countOfThePages; i++) {
            pagesCountArr.push(i);
        }
        return <div>
            <div className={classes.pagination}>
                {
                    pagesCountArr.map(page => {
                        return <span className={page == this.props.currentPage && classes.selectedCurrentPage}>{page}</span>;
                    })
                }
            </div>
            {
                this.props.users.map(u => { // props.users передаём через функцию mapStateToProps в контейнерной компоненте
                    return (
                        <div key={u.id} className={classes.user}>
                            {u.followed ?
                                <button onClick={() => { this.props.follow(u.id) }}>FOLLOW</button> :
                                <button onClick={() => { this.props.unfollow(u.id) }}>UNFOLLOW</button>}
                            <div className={classes.photoSmall}>
                                <div>
                                    <img src={u.photos.small ? u.photos.small : 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'}>{u.photos.small && u.photos.small}</img>
                                </div>
                            </div>
                            <div className={classes.nameAndStatus}>
                                <div><span>{u.name}</span></div>
                                <div><span>{u.status}</span></div>
                            </div>
                            <div className={classes.countryAndCity}>
                                <div><span>{'u.country'}</span></div>
                                <div><span>{'u.city'}</span></div>
                            </div>
                        </div>
                    )
                })
            }
            {/* <div>
                <button className={classes.showUser} onClick={this.showMoreUsers}>SHOW MORE</button>
            </div> */}
        </div >
    }
}

export default Users;