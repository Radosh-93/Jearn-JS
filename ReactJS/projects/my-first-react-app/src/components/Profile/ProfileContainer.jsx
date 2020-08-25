import React from 'react';
import Profile from "./Profile";
//import * as axios from "axios";

import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

class ProfileApiContainer extends React.Component {
	componentDidMount() {
		// axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
		// 	.then(response => {
		// 		this.props.setUserProfile(response.data)})
		this.props.setUserProfile({
			"aboutMe": "я круто чувак 1001%",
			"contacts": {
				"facebook": "facebook.com",
				"website": null,
				"vk": "vk.com/dimych",
				"twitter": "https://twitter.com/@sdf",
				"instagram": "instagra.com/sds",
				"youtube": null,
				"github": "github.com",
				"mainLink": null
			},
			"lookingForAJob": true,
			"lookingForAJobDescription": "не ищу, а дурачусь",
			"fullName": "samurai dimych",
			"userId": 2,
			"photos": {
				"small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
				"large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
			}
		})
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