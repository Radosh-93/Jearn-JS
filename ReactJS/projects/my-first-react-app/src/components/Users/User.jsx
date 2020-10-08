import React from 'react'
import s from './Users.module.css'
import {Button} from '@material-ui/core';
import userPhoto from '../../assets/images/user_img.png'
import Preloader from "../Common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import Pagination from "../Common/Pagination/Pagination";


const User = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div className={s.user_block}>
            <NavLink to={/profile/ + user.id} className={s.photo_block}>
                <img className={s.photo} src={user.photos.small !== null ? user.photos.small : userPhoto} alt=''/>
            </NavLink>
            {user.followed
                ? <Button
                    onClick={() => {
                        unfollow(user.id)
                    }}
                    disabled={followingInProgress.some(id => id === user.id)}
                    variant="contained"
                    color="secondary"
                    className={`${s.btn}`}>
                    Unfollow </Button>
                : <Button
                    onClick={() => {
                        follow(user.id)
                    }}
                    disabled={followingInProgress.some(id => id === user.id)}
                    variant="contained"
                    color="primary"
                    className={`${s.btn}`}>
                    Follow
                </Button>}
            <div className={s.about_user}>
                <span className={s.name}>{user.name}</span>
                <span className={s.location}>{"Country: unknown"}</span>
                <span className={s.status}>{user.status}</span>
            </div>
        </div>
    )
}
    export default User