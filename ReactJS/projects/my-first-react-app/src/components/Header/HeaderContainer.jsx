import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUser} from "../../redux/auth-reduser";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUser()
    }
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
	isLogging: state.auth.isLogging,
	login: state.auth.login
})
export default connect(mapStateToProps, {getAuthUser})(HeaderContainer)