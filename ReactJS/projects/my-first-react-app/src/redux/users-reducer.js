const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
	usersData: [
		{id: 1, followed: true, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
		{id: 2, followed: true, fullName: 'Alex', status: 'I like football!!!', location: {city: 'Kyiv', country: 'Ukraine'}},
		{id: 3, followed: false, fullName: 'Dorota', status: 'I love JS', location: {city: 'Warshaw', country: 'Poland'}},
		{id: 4, followed: false, fullName: 'Taras', status: 'Something...', location: {city: 'Lviv', country: 'Ukraine'}},
		{id: 5, followed: false, fullName: 'Jessy', status: 'Have a good day', location: {city: 'NY', country: 'USA'}},
	],
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				usersData: state.usersData.map(el => {
					if (el.id === action.userId) {
						return {...el, followed: true}
					}
					return el
				})
			}
		case UNFOLLOW:
			return {
				...state,
				usersData: state.usersData.map(el => {
					if (el.id === action.userId) {
						return {...el, followed: false}
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
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer;