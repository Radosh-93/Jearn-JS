import React from 'react'
import s from './Users.module.css'
import {Button} from '@material-ui/core';
import userPhoto from '../../assets/images/user_img.png'
import Preloader from "../Common/Preloader/Preloader";
import {NavLink} from "react-router-dom";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.users_page}>
            <h1 className={s.main_title}>Users</h1>
            <div className={s.pagination}>
                {pages.map((p, i) => {
                    if (p <= 10) {
                        return <span onClick={() => {
                            props.onPageChanged(p)
                        }} className={`page_number ${p === props.currentPage ? s.selectedPage : ''}`} key={i}>{p}</span>
                    }
                })}
                <span>(-<i>{props.totalUsersCount}</i>-)</span>
            </div>
            {props.isFetching ? <Preloader/> : props.usersData.map(el => (
                <div key={el.id} className={s.user_block}>
                    <NavLink to={/profile/ + el.id} className={s.photo_block}>
                        <img className={s.photo} src={el.photos.small !== null ? el.photos.small : userPhoto} alt=''/>
                    </NavLink>
                    {el.followed
                        ? <Button
                            onClick={() => {
                                props.unfollow(el.id)
                            }}
                            disabled={props.followingInProgress.some(id => id === el.id)}
                            variant="contained"
                            color="secondary"
                            className={`${s.btn}`}>
                            Unfollow </Button>
                        : <Button
                            onClick={() => {
                                props.follow(el.id)
                            }}
                            disabled={props.followingInProgress.some(id => id === el.id)}
                            variant="contained"
                            color="primary"
                            className={`${s.btn}`}>
                            Follow
                        </Button>}
                    <div className={s.about_user}>
                        <span className={s.name}>{el.name}</span>
                        <span className={s.location}>{"${el.location.city}, ${el.location.country}"}</span>
                        <span className={s.status}>{el.status}</span>
                    </div>
                </div>))
            }
        </div>
    )
}
export default Users