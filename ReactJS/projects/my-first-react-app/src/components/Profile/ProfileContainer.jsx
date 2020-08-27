import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
		this.props.getProfile(userId) //визиваємо функцію Thunk (getProfile)
	}
	render() {
		if (!this.props.isLogging) return <Redirect to='/login'/>
		return (
			<Profile {...this.props}/> // так передаємо всі props в дочірню компоненту (а не так: props = {this.props})
		)
	}
}

let mapStateToProps = (state) => ({
	userData: state.profilePage.userData,
	isLogging: state.auth.isLogging
})
const WithUrlDataContainer = withRouter(ProfileContainer); //Контейнер над ProfileContainer

export default connect(mapStateToProps, {getProfile})(WithUrlDataContainer) // визивається в App.js