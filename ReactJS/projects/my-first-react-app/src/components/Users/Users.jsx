import React from 'react'
import s from './Users.module.css'
import { Button } from '@material-ui/core';
import userPhoto from '../../assets/images/user_img.png'

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
						return <span onClick={() => { props.onPageChanged(p) }} className={p === props.currentPage && s.selectedPage} key={i}>{p}</span>
					}
				})}
			</div>
			{props.usersData.map(el => (
				<div key={el.id} className={s.user_block}>
					<img className={s.photo} src={el.photos.small !== null ? el.photos.small : userPhoto} alt='photo' />
					{el.followed ? <Button
						onClick={() => { props.onUnfollow(el.id) }}
						variant="contained"
						color="secondary"
						className={`${s.btn}`}>
						Unfollow
						</Button> : <Button
							onClick={() => { props.onFollow(el.id) }}
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
				</div>))}
		</div>
	)
}
export default Users