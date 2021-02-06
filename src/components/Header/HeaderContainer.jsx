import React from "react";
import Header from './Header';
import { authThunk } from '../../redux/reducer_auth';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
    componentDidMount = () => { this.props.authThunk(); }
    render = () => { return <Header {...this.props} /> }
}

let mapStateToPropsPost = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToPropsPost, { authThunk })(HeaderContainer);