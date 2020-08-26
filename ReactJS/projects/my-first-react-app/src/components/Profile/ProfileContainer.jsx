import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, toggleFetching} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
		this.props.toggleFetching(true);
		profileAPI.getProfile(userId).then(data => {
				this.props.setUserProfile(data)});
				this.props.toggleFetching(false);
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