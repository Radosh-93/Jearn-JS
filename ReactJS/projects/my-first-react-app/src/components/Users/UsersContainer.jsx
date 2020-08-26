import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unfollow,
    toggleFetching, toggleFollowingProgress
} from "../../redux/users-reducer";
import Users from "./Users";
import {userAPI} from "../../api/api";

class UsersApiComponent extends React.Component { //Axios request
    componentDidMount() {
        this.props.toggleFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.toggleFetching(false);

            })
    }

    onPageChanged = (pageNumber) => {
        debugger;
        this.props.setCurrentPage(pageNumber);
        this.props.toggleFetching(true);
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.toggleFetching(false);
            })

    }

    render() {
        return <Users {...this.props} onPageChanged={this.onPageChanged}
        />
    }

} // axios request

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

const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleFetching, toggleFollowingProgress
})(UsersApiComponent)

export default UsersContainer