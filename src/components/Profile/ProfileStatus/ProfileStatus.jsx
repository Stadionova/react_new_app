import React from "react";

class ProfileStatus extends React.Component {
    state = {
        statusTitle: 'type your status',
        currentStatus: 'Hi everybody!',
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
    changeInputText() {
        this.setState({
            currentStatus: ''
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
                    <div><input autoFocus={true} value={this.state.currentStatus}
                        onBlur={this.deActivateMode.bind(this)} onInput={this.changeInputText.bind(this)}
                        type="text" /></div>
                }
            </div>
        )
    }
};

export default ProfileStatus;