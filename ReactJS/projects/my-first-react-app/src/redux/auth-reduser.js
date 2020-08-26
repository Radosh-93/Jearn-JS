import {authAPI} from "../api/api";

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
                ...action.data, // перезаписуємо state, якщо приходять дані з action
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

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const toggleFetching = (status) => ({type: TOGGLE_IS_FETCHING, status});

export const getAuthUser = () => (dispatch) => {
    dispatch(toggleFetching(true));
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login));
                dispatch(toggleFetching(false));
            }
        })
}


export default authReducer;