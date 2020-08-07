import React from 'react'
import s from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
	return (
		<li className={s.user_name}>
			<NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.userName}</NavLink>
		</li>
	)
}

export default DialogItem