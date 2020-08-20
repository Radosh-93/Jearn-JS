import React from "react";
import {connect} from "react-redux";
import {
	followAC,
	setCurrentPageAC,
	setTotalUsersCountAC,
	setUsersAC,
	unfollowAC,
	toggleFetchingAC
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersApiComponent extends React.Component { //Axios request
	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				console.log(response);
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
				this.props.toggleIsFetching(false);

			})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.toggleIsFetching(false);
			})

	}

	render() {
		return <Users onPageChanged={this.onPageChanged}
							 totalUsersCount={this.props.totalUsersCount}
							 pageSize={this.props.pageSize}
							 currentPage={this.props.currentPage}
							 usersData={this.props.usersData}
							 onFollow={this.props.onFollow}
							 onUnfollow={this.props.onUnfollow}
							 isFetching={this.props.isFetching}
				/>
	}

} // axios request

let mapStateToProps = (state) => ({
	usersData: state.usersPage.usersData,
	pageSize: state.usersPage.pageSize,
	totalUsersCount: state.usersPage.totalUsersCount,
	currentPage: state.usersPage.currentPage,
	isFetching: state.usersPage.isFetching
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
	},
	toggleIsFetching: (status) => {
		dispatch(toggleFetchingAC(status))
	}
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent)

export default UsersContainer