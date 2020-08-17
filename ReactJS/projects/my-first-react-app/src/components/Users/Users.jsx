import React from "react";
import s from './Users.module.css'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as axios from "axios";
import userPhoto from '../../assets/images/user_img.png'

const useStyles = makeStyles((theme) => ({
	button: {
		textTransform: 'none',
		cursor: 'pointer'
	},
}));

const Users = (props) => {
	const classes = useStyles();
	if (props.usersData.length === 0) {
		axios.get("https://social-network.samuraijs.com/api/1.0/users")
			.then(response => {
			props.setUsers(response.data.items)})
	}
	return (
		<div className={s.users_page}>
			<h1 className={s.main_title}>Users</h1>
			{props.usersData.map(el => (
				<div key={el.id} className={s.user_block}>
					<img className={s.photo} src={el.photos.small !== null ? el.photos.small : userPhoto} alt='photo' />
					{el.followed ? <Button
						onClick={() => { props.onUnfollow(el.id) }}
						variant="contained"
						color="secondary"
						className={`${s.btn} ${classes.button}`}>
						Unfollow
					</Button> : <Button
							onClick={() => { props.onFollow(el.id) }}
							variant="contained"
							color="primary"
							className={`${s.btn} ${classes.button}`}>
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