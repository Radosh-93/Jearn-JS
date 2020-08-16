const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
	usersData: [],
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
				...state, usersData: [...state.usersData, ...action.users]
			}
		default:
			return state
	}
}
export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })


export default usersReducer;