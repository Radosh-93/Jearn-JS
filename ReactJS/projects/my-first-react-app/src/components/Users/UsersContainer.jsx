import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
let mapStateToProps = (state) => ({
	usersData: state.usersPage.usersData
})
let mapDispatchToProps = (dispatch) => ({
	onFollow: (userId) => {
		dispatch(followAC(userId))
	},
	onUnfollow: (userId) => {
		dispatch(unfollowAC(userId))
	},
	setUsers: (users) => {
		dispatch(setUsersAC(users))
	}
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer