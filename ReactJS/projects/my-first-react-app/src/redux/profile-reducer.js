import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_DATA = 'SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const SET_USER_STATUS = 'SET_USER_STATUS'


let initialState = {
	postsData: [
		{ id: 1, content: 'Hey, why nobody love me?', likesCount: 15 },
		{ id: 2, content: 'Wow, I still learn React!', likesCount: 8 },
		{ id: 3, content: 'Some text in the post...', likesCount: 3 },
		{ id: 4, content: 'Kukaracha bla bla...', likesCount: 5 },
		{ id: 5, content: 'Bugaga buzinga...', likesCount: 5 },
	],
	newPostText: 'it-kamasutra.com',
	userData: null,
	isFetching: true,
	userStatus: ""
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let post = {
				id: state.postsData.length + 1,
				content: state.newPostText,
				likesCount: 0
			}
			return {
				...state,
				postsData: [...state.postsData, post],
				newPostText: ''
			}
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText
			}
		case SET_USER_DATA:
			return {
				...state, userData: action.userData
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state, userData: action.userData
			}
		case SET_USER_STATUS:
			return {
				...state, userStatus: action.text
			}
		default:
			return state
	}
}

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (data) => ({ type: SET_USER_DATA, userData: data });
export const toggleFetching = (status) => ({ type: TOGGLE_IS_FETCHING, isFetching: status });
export const setUserStatus = (text) => ({ type: SET_USER_STATUS, text });

export const getProfile = (userId) => (dispatch) => {
	dispatch(toggleFetching(true));
	profileAPI.getProfile(userId).then(data => {
		dispatch(setUserProfile(data))
	});
	dispatch(toggleFetching(false));
}
export const getUserStatus = (userId) => (dispatch) => {
	profileAPI.getStatus(userId)
		.then(response => {
			if(response.data !== null) {
				dispatch(setUserStatus(response.data))
			} else {
				dispatch(setUserStatus('Enter your status'))
			}
		})
}
export const updateUserStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status)
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setUserStatus(status))
			}
		})
}
export default profileReducer;