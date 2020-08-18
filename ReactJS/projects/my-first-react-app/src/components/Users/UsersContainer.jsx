import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
let mapStateToProps = (state) => ({
	usersData: state.usersPage.usersData,
	pageSize: state.usersPage.pageSize,
	totalUsersCount: state.usersPage.totalUsersCount,
	currentPage: state.usersPage.currentPage
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
	},
	setCurrentPage: (page) => {
		dispatch(setCurrentPageAC(page))
	},
	setTotalUsersCount: (totalCount) => {
		dispatch(setTotalUsersCountAC(totalCount))
	}
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer