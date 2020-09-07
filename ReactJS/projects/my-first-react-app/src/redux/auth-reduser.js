import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';


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
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isLogging) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isLogging}
});

export const getAuthUser = () => async (dispatch) => {
    let response = await authAPI.me(); //then повертає Promise, якщо додамо слово return!!!
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    console.log(response.data);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUser())
    } else {
        let errorMessage = response.data.messages.length > 0 ? response.data.messages : 'Some error'
        dispatch(stopSubmit('login', {_error: errorMessage}))
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;