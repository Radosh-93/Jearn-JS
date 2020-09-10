import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserFollowingStatus, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId
			if(!userId) {
				this.props.history.push('/login') //якщо не визначено userId, то переадресувати на цю
			}
		}
		this.props.getProfile(userId) //визиваємо функцію Thunk (getProfile)
		this.props.getUserStatus(userId)
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		let userId = this.props.match.params.userId
			? this.props.match.params.userId
			: this.props.authorizedUserId;
		if(prevProps.match.params.userId !== this.props.match.params.userId) {
			this.props.getProfile(userId);
			this.props.getUserStatus(userId)
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
	isFollow: state.profilePage.isFollow,
	authorizedUserId: state.auth.userId,

})
export default compose(
	connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus, getUserFollowingStatus}),
	withRouter,
	//withAuthRedirect
)(ProfileContainer)