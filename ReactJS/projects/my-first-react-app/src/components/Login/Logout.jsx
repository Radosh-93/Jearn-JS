import React from "react";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reduser";
import {getProfile} from "../../redux/profile-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

const Logout = (props) => {
    let userId = props.match.params.userId ? props.match.params.userId : 10954;
    let onLogout = () => {
        props.logout();
        props.getProfile(userId);
    }
    return (
        <div>
            <span>{props.login}</span>
            <span onClick={onLogout} style={{cursor: 'pointer', marginLeft: '15px'}}>Log Out</span>
        </div>
    )
}
let mapStateToProps = (state) => ({login: state.auth.login})

export default compose(
    connect(mapStateToProps, {logout, getProfile}),
    withRouter
    )(Logout)
