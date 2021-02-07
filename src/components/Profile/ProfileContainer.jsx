import React from "react";
import { setUserProfile } from '../../redux/reducer_profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Profile from './Profile';
import withAuthRedirect from './../../hoc/withAuthRedirect';
import { usersApi } from './../../api/api';
import { compose } from "redux";

let mapStateToPropsPost = (state) => {
    return {
        profile: state.dialogsState.profile
    }
}

class ProfileContainer extends React.Component {
    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        usersApi.getUserId(userId).then(response => {
            this.props.setUserProfile(response.data);
        });
    }
    render = () => {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

// вот так
export default compose(
    connect(mapStateToPropsPost, { setUserProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

// вместо
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let WithUrlContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToPropsPost, { setUserProfile })(WithUrlContainerComponent);