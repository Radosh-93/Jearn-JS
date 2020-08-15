import React from "react";
import s from './Users.module.css'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	button: {
		textTransform: 'none',
		cursor: 'pointer'
	},
}));

const Users = (props) => {
	const classes = useStyles();
	return (
		<div className={s.users_page}>
			<h1 className={s.main_title}>Users</h1>
			{props.usersData.map(el => (
				<div key={el.id} className={s.user_block}>
					<img className={s.photo} src={el.photo} alt='photo' />
					<Button variant="contained" color="primary" className={`${s.btn} ${classes.button}`}>{el.followed === true ? 'Unfollow' : 'Follow'}</Button>
					<div className={s.about_user}>
						<span className={s.name}>{el.fullName}</span>
						<span className={s.location}>{`${el.location.city}, ${el.location.country}`}</span>
						<span className={s.status}>{el.status}</span>
					</div>
				</div>))}
		</div>
	)
}

export default Users