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
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateMode.bind(this)}>{this.state.currentStatus}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div><input autoFocus={true} onBlur={this.deActivateMode.bind(this)} type="text" placeholder={this.state.statusTitle} /></div>
                }
            </div>
        )
    }
};

export default ProfileStatus;