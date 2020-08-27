import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })

    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.props.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                    : <div>
                        <input type="text" onChange={this.onStatusChange} autoFocus={true} value={this.state.status} onBlur={this.deactivateEditMode.bind(this)}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus