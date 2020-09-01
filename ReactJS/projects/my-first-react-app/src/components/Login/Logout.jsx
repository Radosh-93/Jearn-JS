import React from "react";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reduser";

const Logout = (props) => {
    return (
        <div>
            <span>{props.login}</span>
            <span onClick={() => {props.logout()}} style={{cursor: 'pointer', marginLeft: '15px'}}>Log Out</span>
        </div>
    )
}
let mapDispatchToProps = (state) => (
    {
        login: state.auth.login
    }
)
export default connect(mapDispatchToProps, {logout})(Logout)