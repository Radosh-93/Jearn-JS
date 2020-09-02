import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
                ...action.payload, // перезаписуємо state, якщо приходять дані з action

            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.status
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isLogging) => ({type: SET_USER_DATA, payload: {userId, email, login, isLogging}});
export const toggleFetching = (status) => ({type: TOGGLE_IS_FETCHING, status});

export const getAuthUser = () => (dispatch) => {
    dispatch(toggleFetching(true));
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
                dispatch(toggleFetching(false));
            }
        })
}
export const login = (email, password, rememberMe) => (dispatch) => {
    dispatch(toggleFetching(true));
    authAPI.login(email, password, rememberMe)
        .then(response => {
            console.log(response.data)
            if(response.data.resultCode === 0) {
                dispatch(getAuthUser())
            } else {
                let errorMessage = response.data.messages.length > 0 ? response.data.messages : 'Some error'
                dispatch(stopSubmit('login', {_error: errorMessage}))
            }
        })
}

export const logout = () => (dispatch) => {
    dispatch(toggleFetching(true));
    authAPI.logout()
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
                dispatch(toggleFetching(false));
            }
        })
}

export default authReducer;