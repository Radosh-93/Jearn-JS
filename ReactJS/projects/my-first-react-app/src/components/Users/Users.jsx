import React from "react";
import s from './Users.module.css'

const Users = (props) => {
	return (
		<div>
			<h1>Users</h1>
			{props.usersData.map(el => (
				<div key={el.id}>
					<img className={s.photo} src={el.photot} alt='photo' />
					<button className='btn'>{el.followed === true ? 'Unfollow' : 'Follow'}</button>
					<div className={s.about_user}>
						<span className={s.name}>{el.fullName}</span>
						<span className={s.location}>{el.location.city}, {el.location.country}</span>
						<span className={s.status}>{el.status}</span>
					</div>
				</div>))}
		</div>
	)
}

export default Users