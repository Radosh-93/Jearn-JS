import React from 'react'
import s from './Users.module.css'
import Preloader from "../Common/Preloader/Preloader";
import Pagination from "../Common/Pagination/Pagination";
import User from "./User";


const Users = ({isFetching, totalItemsCount, pageSize, currentPage, onPageChanged, portionSize, ...props}) => {
    //if(props.isFetching) return <Preloader />
    debugger;
    return (
        <div>
            {isFetching
                ? <Preloader/>
                : <div className={s.users_page}>
                    <h1 className={s.main_title}>Users ({totalItemsCount})</h1>
                    <Pagination totalItemsCount={totalItemsCount}
                                pageSize={pageSize}
                                onPageChanged={onPageChanged}
                                currentPage={currentPage}
                                portionSize={portionSize}/>

                    {props.usersData.map(user => (
                    <User user={user}
                          followingInProgress={props.followingInProgress}
                          follow={props.follow} unfollow={props.unfollow}
                          key={user.id}/>
                    ))
                    }
                </div>}
        </div>

    )
}
export default Users