import {userAPI} from "../api/api";

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET-USERS'
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = `users/TOGGLE_FOLLOWING_PROGRESS`

let initialState = {
    usersData: [],
    pageSize: 10,
    portionSize: 10,
    totalItemsCount: 100,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    fake: 10
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
                ...state, usersData: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.page
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalItemsCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.status
            }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.status
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id !== action.userId)]

            }
        default:
            return state
    }
}
export const acceptFollow = (userId) => ({type: FOLLOW, userId})
export const acceptUnfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users: users})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalItemsCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count})
export const toggleFetching = (status) => ({type: TOGGLE_IS_FETCHING, status})
export const toggleFollowingProgress = (status, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, status, userId})

//Thunks
export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleFetching(true));
    let data = await userAPI.getUsers(currentPage, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setTotalItemsCount(data.totalCount));
    dispatch(toggleFetching(false));
}

    //refactoring follow unfollow
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator ) => {
    dispatch(toggleFollowingProgress(true, userId));
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}
export const follow = (userId) => async (dispatch) => {
    let apiMethod = userAPI.followUser.bind(userAPI);
    await followUnfollowFlow(dispatch, userId, apiMethod, acceptFollow)
}
export const unfollow = (userId) => async (dispatch) => {
    let apiMethod = userAPI.unfollowUser.bind(userAPI);
    await followUnfollowFlow(dispatch, userId,apiMethod, acceptUnfollow)
}
export default usersReducer;