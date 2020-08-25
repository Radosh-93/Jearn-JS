import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className={s.header}>
			<img src="https://image.flaticon.com/icons/svg/119/119595.svg" alt='' />

			<div className={s.login}>
				{props.isLogging ? props.login : <NavLink to='/login'>Login</NavLink>}
			</div>
		</header>
	)
}

export default Header