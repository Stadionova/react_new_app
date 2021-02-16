import React from "react";

class ProfileStatus extends React.Component {
    state = {
        statusTitle: 'type your status',
        currentStatus: 'Hy everybody!',
        editMode: false
    }
    activateMode() {
        this.setState({
            editMode: true
        });
    }
    deActivateMode() {
        this.setState({
            editMode: false
        });
    }
    render() {
        return (
            <div>
                <div><span onClick={this.activateMode.bind(this)}>{this.state.currentStatus}</span></div>
                <div><input onBlur={this.deActivateMode.bind(this)} type="text" placeholder={this.state.statusTitle} /></div>
            </div>
        )
    }
};

export default ProfileStatus;