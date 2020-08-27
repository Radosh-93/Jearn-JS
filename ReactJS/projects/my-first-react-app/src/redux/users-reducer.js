import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'

let initialState = {
	usersData: [],
	pageSize: 10,
	totalUsersCount: 50,
	currentPage: 1,
	isFetching: true,
	followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				usersData: state.usersData.map(el => {
					if (el.id === action.userId) {
						return { ...el, followed: true }
					}
					return el
				})
			}
		case UNFOLLOW:
			return {
				...state,
				usersData: state.usersData.map(el => {
					if (el.id === action.userId) {
						return { ...el, followed: false }
					}
					return el
				})
			}
		case SET_USERS:
			return {
				...state, usersData: action.users
			}
		case SET_CURRENT_PAGE:
			return {
				...state, currentPage: action.page
			}
		case SET_TOTAL_USERS_COUNT:
			return {
				...state, totalUsersCount: action.count
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state, isFetching: action.status
			}
		case TOGGLE_FOLLOWING_PROGRESS:
			return {
				...state, followingInProgress: action.status
					? [...state.followingInProgress, action.userId]
					: [state.followingInProgress.filter(id => id !== action.userId)]

			}
		default:
			return state
	}
}
export const acceptFollow = (userId) => ({ type: FOLLOW, userId })
export const acceptUnfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users: users})
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count })
export const toggleFetching = (status) => ({ type: TOGGLE_IS_FETCHING, status })
export const toggleFollowingProgress = (status, userId) => ({ type: TOGGLE_FOLLOWING_PROGRESS, status, userId})

export const getUsers = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleFetching(true));
		userAPI.getUsers(currentPage, pageSize)
			.then(data => {
				dispatch(setUsers(data.items));
				dispatch(setTotalUsersCount(data.totalCount));
				dispatch(toggleFetching(false));

			})
	}
}
export const follow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
		userAPI.followUser(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(acceptFollow(userId));
			}
			dispatch(toggleFollowingProgress(false, userId));
		})
	}
}
export const unfollow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
		userAPI.unfollowUser(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(acceptUnfollow(userId));
			}
			dispatch(toggleFollowingProgress(false, userId));
		})
	}
}
export default usersReducer;