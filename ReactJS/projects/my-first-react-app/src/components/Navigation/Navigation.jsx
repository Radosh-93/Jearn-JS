import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css'


const Navigation = () => {
	return (
		<nav className={s.nav}>
			<ul>
				<li><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
				<li><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
				<li><NavLink to="/feed" activeClassName={s.active}>News</NavLink></li>
				<li><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
				<li><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
			</ul>
		</nav>
	)
}

export default Navigation