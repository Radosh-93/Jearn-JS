import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_DATA = 'SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'


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
	isFetching: true
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
		default:
			return state
	}
}

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (data) => ({ type: SET_USER_DATA, userData: data });
export const toggleFetching = (status) => ({ type: TOGGLE_IS_FETCHING, isFetching: status });

export const getProfile = (userId) => (dispatch) => {
	dispatch(toggleFetching(true));
	profileAPI.getProfile(userId).then(data => {
		dispatch(setUserProfile(data))
	});
	dispatch(toggleFetching(false));
}

export default profileReducer;