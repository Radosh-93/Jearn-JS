import {createSelector} from "reselect";

const getUsersDataSelector = (state) => state.usersPage.usersData;

export const getPageSize = (state) => state.usersPage.pageSize;

export const getTotalItemsCount = (state) => state.usersPage.totalItemsCount;

export const getPortionSize = (state) => state.usersPage.portionSize;

export const getCurrentPage = (state) => state.usersPage.currentPage;

export const getFetchingStatus = (state) => state.usersPage.isFetching;

export const getFollowingProgress = (state) => state.usersPage.followingInProgress;


export const getUserSuper = createSelector(getUsersDataSelector, getFetchingStatus, (users, isFetching) => {
    return users.filter(u => true)
}) //першими параметрами передаються простіші селектори, в аргументі анонімної функції передаються значення що повертають ці селектори