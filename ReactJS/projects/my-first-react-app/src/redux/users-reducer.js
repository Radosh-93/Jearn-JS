const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
	usersData: [
		{ id: 1, photo: 'https://www.meme-arsenal.com/memes/d7a0ccde363c86b4b25457671e0a052b.jpg', followed: true, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
		{ id: 2, photo: 'https://www.meme-arsenal.com/memes/5da8de38994bdba84654fd5f64e9fdc0.jpg', followed: true, fullName: 'Alex', status: 'I like football!!!', location: { city: 'Kyiv', country: 'Ukraine' } },
		{ id: 3, photo: 'https://i.pinimg.com/236x/e9/25/f7/e925f77a990b2c0f74f595a4a921890a.jpg', followed: false, fullName: 'Dorota', status: 'I love JS', location: { city: 'Warshaw', country: 'Poland' } },
		{ id: 4, photo: 'https://i.pinimg.com/736x/7e/9e/08/7e9e08555d633b03b254bd819bd9335a.jpg', followed: false, fullName: 'Taras', status: 'Something...', location: { city: 'Lviv', country: 'Ukraine' } },
		{ id: 5, photo: 'https://i.pinimg.com/736x/3b/0d/cb/3b0dcbe0358e163382d99d8fe4440306.jpg', followed: false, fullName: 'Jessy', status: 'Have a good day', location: { city: 'NY', country: 'USA' } },
	],
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