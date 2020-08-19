const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'

let initialState = {
	usersData: [],
	pageSize: 5,
	totalUsersCount: 50,
	currentPage: 1,
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
		default:
			return state
	}
}
export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setTotalUsersCountAC = (count) => ({ type: SET_TOTAL_USERS_COUNT, count })


export default usersReducer;