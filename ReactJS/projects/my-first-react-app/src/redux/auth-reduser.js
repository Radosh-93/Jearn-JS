const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'


let initialState = {
	userId: null,
	email: null,
	login: null,
	isFetching: false,
	isLogging: false
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
				isLogging: true

			}
		case TOGGLE_IS_FETCHING:
			return {
				...state, isFetching: action.status
			}
		default:
			return state
	}
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login} });
export const toggleFetching = (status) => ({ type: TOGGLE_IS_FETCHING, status });


export default authReducer;