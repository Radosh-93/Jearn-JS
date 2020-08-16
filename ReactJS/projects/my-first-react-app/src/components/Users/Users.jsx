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
	debugger;
	if (props.usersData.length === 0) {

		props.setUsers([
			{ id: 1, photoUrl: 'https://www.meme-arsenal.com/memes/d7a0ccde363c86b4b25457671e0a052b.jpg', followed: true, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
			{ id: 2, photoUrl: 'https://www.meme-arsenal.com/memes/5da8de38994bdba84654fd5f64e9fdc0.jpg', followed: true, fullName: 'Alex', status: 'I like football!!!', location: { city: 'Kyiv', country: 'Ukraine' } },
			{ id: 3, photoUrl: 'https://i.pinimg.com/236x/e9/25/f7/e925f77a990b2c0f74f595a4a921890a.jpg', followed: false, fullName: 'Dorota', status: 'I love JS', location: { city: 'Warshaw', country: 'Poland' } },
			{ id: 4, photoUrl: 'https://i.pinimg.com/736x/7e/9e/08/7e9e08555d633b03b254bd819bd9335a.jpg', followed: false, fullName: 'Taras', status: 'Something...', location: { city: 'Lviv', country: 'Ukraine' } },
			{ id: 5, photoUrl: 'https://i.pinimg.com/736x/3b/0d/cb/3b0dcbe0358e163382d99d8fe4440306.jpg', followed: false, fullName: 'Jessy', status: 'Have a good day', location: { city: 'NY', country: 'USA' } },
		])
	}
	return (
		<div className={s.users_page}>
			<h1 className={s.main_title}>Users</h1>
			{props.usersData.map(el => (
				<div key={el.id} className={s.user_block}>
					<img className={s.photo} src={el.photoUrl} alt='photo' />
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
						<span className={s.name}>{el.fullName}</span>
						<span className={s.location}>{`${el.location.city}, ${el.location.country}`}</span>
						<span className={s.status}>{el.status}</span>
					</div>
				</div>))}
		</div>
	)
}

export default Users