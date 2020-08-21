import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";

import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

class ProfileApiContainer extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then(response => {
				this.props.setUserProfile(response.data)})
	}

	render() {
		return (
			<Profile {...this.props}/> // так передаємо всі props в дочірню компоненту (а не так: props = {this.props})
		)
	}
}

let mapStateToProps = (state) => ({
	userData: state.profilePage.userData,
})

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileApiContainer)

export default ProfileContainer