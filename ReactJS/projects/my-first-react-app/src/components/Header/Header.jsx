import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import Logout from "../Login/Logout";

const Header = (props) => {
	return (
		<header className={s.header}>
			<img src="https://image.flaticon.com/icons/svg/119/119595.svg" alt='' />
			{props.isLogging ? <Logout/> : <NavLink to='/login'>Login</NavLink>}
		</header>
	)
}

export default Header