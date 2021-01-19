import React from "react";
import { setUserProfile } from '../../redux/reducer_profile';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }
    render = () => {
        return <Profile {...this.props} />
    }
}

let mapStateToPropsPost = (state) => {
    return {
        a: 13
    }
}

export default connect(mapStateToPropsPost, { setUserProfile })(ProfileContainer);