import React from 'react';
import s from './Navigation.module.css'

const Navigation = () => {
	return (
		<nav className={s.nav}>
			<ul>
				<li><a className={`${s.item} ${s.active}`} href="/profile">Profile</a></li>
				<li><a href="/dialogs">Messages</a></li>
				<li><a href="#">News</a></li>
				<li><a href="#">Music</a></li>
				<li><a href="#">Settings</a></li>
			</ul>
		</nav>
	)
}

export default Navigation