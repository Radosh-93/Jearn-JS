import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, toggleFetching} from "../../redux/auth-reduser";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true);
        authAPI.getAuth().then(data => {
                if (data.resultCode === 0) {
                	let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login)
                    this.props.toggleFetching(false);
                }
            })
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
export default connect(mapStateToProps, {setAuthUserData, toggleFetching})(HeaderContainer)