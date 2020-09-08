import React from 'react'
import s from './Users.module.css'
import Preloader from "../Common/Preloader/Preloader";
import Pagination from "../Common/Pagination/Pagination";
import User from "./User";


const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {
    return (
        <div className={s.users_page}>
            <h1 className={s.main_title}>Users</h1>
            <Pagination totalUsersCount={totalUsersCount}
                        pageSize={pageSize}
                        onPageChanged={onPageChanged}
                        currentPage={currentPage}/>
            {props.isFetching
                ? <Preloader/>
                : props.usersData.map(user => (
                    <User user={user}
                          followingInProgress={props.followingInProgress}
                          follow={props.follow} unfollow={props.unfollow}
                          key={user.id}/>
                    ))
            }
        </div>
    )
}
export default Users