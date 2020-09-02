import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPage, getUsers, unfollow, follow
} from "../../redux/users-reducer";
import Users from "./Users";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize); //axios request
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    render() {
        return <Users {...this.props} onPageChanged={this.onPageChanged}
        />
    }
}

let mapStateToProps = (state) => ({
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
})
// let mapDispatchToProps = (dispatch) => ({
// 	onFollow: (userId) => {
// 		dispatch(followAC(userId))
// 	},
// 	onUnfollow: (userId) => {
// 		dispatch(unfollowAC(userId))
// 	},
// 	setUsers: (users) => {
// 		dispatch(setUsersAC(users))
// 	},
// 	setCurrentPage: (page) => {
// 		dispatch(setCurrentPageAC(page))
// 	},
// 	setTotalUsersCount: (totalCount) => {
// 		dispatch(setTotalUsersCountAC(totalCount))
// 	},
// 	toggleIsFetching: (status) => {
// 		dispatch(toggleFetchingAC(status))
// 	}
// })

export default compose(
    connect(mapStateToProps, {setCurrentPage, getUsers, unfollow, follow}), //second container
    //withAuthRedirect // fist container
)(UsersContainer)