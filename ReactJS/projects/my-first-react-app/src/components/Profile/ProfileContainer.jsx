import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";

import {connect} from "react-redux";
import {setUserProfile, toggleFetching} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
		this.props.toggleFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then(response => {
				this.props.setUserProfile(response.data)});
				this.props.toggleFetching(false);
		// this.props.setUserProfile({
		// 	"aboutMe": "я круто чувак 1001%",
		// 	"contacts": {
		// 		"facebook": "facebook.com",
		// 		"website": null,
		// 		"vk": "vk.com/dimych",
		// 		"twitter": "https://twitter.com/@sdf",
		// 		"instagram": "instagra.com/sds",
		// 		"youtube": null,
		// 		"github": "github.com",
		// 		"mainLink": null
		// 	},
		// 	"lookingForAJob": true,
		// 	"lookingForAJobDescription": "не ищу, а дурачусь",
		// 	"fullName": "samurai dimych",
		// 	"userId": 2,
		// 	"photos": {
		// 		"small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
		// 		"large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
		// 	}
		// })
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
const WithUrlDataContainer = withRouter(ProfileContainer); //Контейнер над ProfileContainer

export default connect(mapStateToProps, {setUserProfile, toggleFetching})(WithUrlDataContainer) // визивається в App.js