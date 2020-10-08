import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE_POST';
const SET_USER_DATA = 'profile/SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'profile/TOGGLE-IS-FETCHING';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const SET_USER_FOLLOWING_STATUS = 'profile/SET_USER_FOLLOWING_STATUS';


let initialState = {
    postsData: [
        {id: 1, content: 'Hey, why nobody love me?', likesCount: 15},
        {id: 2, content: 'Wow, I still learn React!', likesCount: 8},
        {id: 3, content: 'Some text in the post...', likesCount: 3},
        {id: 4, content: 'Kukaracha bla bla...', likesCount: 5},
        {id: 5, content: 'Bugaga buzinga...', likesCount: 5},
    ],
    userData: null,
    isFetching: true,
    userStatus: "",
    isFollow: false
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: state.postsData.length + 1,
                content: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, post]
            }
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(el => el.id !== action.id)
            }
        case SET_USER_DATA:
            return {
                ...state, userData: action.userData
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case SET_USER_STATUS:
            return {
                ...state, userStatus: action.text
            }
        case SET_USER_FOLLOWING_STATUS:
            return {
                ...state, isFollow: action.isFollow
            }
        default:
            return state
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (id) => ({type: DELETE_POST, id});
const setUserProfile = (data) => ({type: SET_USER_DATA, userData: data});
const toggleFetching = (status) => ({type: TOGGLE_IS_FETCHING, isFetching: status});
const setUserStatus = (text) => ({type: SET_USER_STATUS, text});
const setUserFollowingStatus = (isFollow) => ({type: SET_USER_FOLLOWING_STATUS, isFollow});

/*=====Thunk=======*/
export const getProfile = (userId) => async (dispatch) => {
    dispatch(toggleFetching(true))
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
    if (response.data !== null) {
        dispatch(toggleFetching(false))
    }
}
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    if (response.data !== null) {
        dispatch(setUserStatus(response.data))
    } else {
        dispatch(setUserStatus(""))
    }
}
export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}
export const getUserFollowingStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getFollowingStatus(userId);
    if(response.status === 200) {
        dispatch(setUserFollowingStatus(response.data))
    }
}
export default profileReducer;