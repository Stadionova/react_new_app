import React from "react";
import Header from './Header';
import { setUserAuthDataFromServer } from '../../redux/reducer_auth';
import { connect } from 'react-redux';
import { usersApi } from './../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        usersApi.login().then(response => {
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