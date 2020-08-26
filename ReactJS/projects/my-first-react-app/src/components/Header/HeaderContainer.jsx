import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getUserAuth} from "../../redux/auth-reduser";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUserAuth()
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
export default connect(mapStateToProps, {getUserAuth})(HeaderContainer)