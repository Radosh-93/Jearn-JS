import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
		this.props.getProfile(userId) //визиваємо функцію Thunk (getProfile)
	}
	render() {
		return (
			<Profile {...this.props}/> // так передаємо всі props в дочірню компоненту (а не так: props = {this.props})
		)
	}
}
let mapStateToProps = (state) => ({
	userData: state.profilePage.userData
})
export default compose(
	connect(mapStateToProps, {getProfile}),
	withRouter,
	//withAuthRedirect
)(ProfileContainer)