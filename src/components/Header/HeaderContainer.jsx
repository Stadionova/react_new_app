import React from "react";
import Header from './Header';
import { setUserAuthDataFromServer } from '../../redux/reducer_auth';
import * as axios from 'axios';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode == 0) {
                let { id, email, login } = response.data.data;
                this.props.setUserAuthDataFromServer(id, email, login);
            }
        });
    }
    render = () => { return <Header {...this.props} /> }
}

let mapStateToPropsPost = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToPropsPost, { setUserAuthDataFromServer })(HeaderContainer);