import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css'
import FriendsContainer from "./Friends/FriendsContainer";


const Navigation = (props) => {
	return (
		<nav className={s.nav}>
			<ul>
				<li><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
				<li><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
				<li><NavLink to="/feed" activeClassName={s.active}>News</NavLink></li>
				<li><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
				<li className={s.special}><NavLink to="/users" activeClassName={s.active}>Find users</NavLink></li>
				<li className={s.special}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>

			</ul>
			<FriendsContainer store={props.store} />
		</nav>
	)
}

export default Navigation