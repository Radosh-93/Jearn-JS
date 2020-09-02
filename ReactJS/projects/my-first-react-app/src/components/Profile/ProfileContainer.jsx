import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
		this.props.getProfile(userId) //визиваємо функцію Thunk (getProfile)
		this.props.getUserStatus(userId)
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		if(prevProps.match.params.userId !== this.props.match.params.userId) {
			this.props.getProfile(this.props.match.params.userId);
			this.props.getUserStatus(this.props.match.params.userId)
		}
	}

	render() {
		return (
			<Profile {...this.props}/> // так передаємо всі props в дочірню компоненту (а не так: props = {this.props})
		)
	}
}
let mapStateToProps = (state) => ({
	userData: state.profilePage.userData,
	userStatus: state.profilePage.userStatus,
	isLogging: state.auth.isLogging,
	userId: state.auth.userId
})
export default compose(
	connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus}),
	withRouter,
	//withAuthRedirect
)(ProfileContainer)