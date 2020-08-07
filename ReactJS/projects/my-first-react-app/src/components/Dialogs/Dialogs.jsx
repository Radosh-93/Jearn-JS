import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
	return (
		<li className={s.user_name}>
			<NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.userName}</NavLink>
		</li>
	)
}

const Message = (props) => {
	return (
		<li className={`${s.message} ${props.classMsg}`}>
			<span>{props.content}</span>
		</li>
	)
}

const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<ul className={s.dialogs_items}>
				<DialogItem userName='Dimych' id='1' />
				<DialogItem userName='Andey' id='2' />
				<DialogItem userName='Sveta' id='3' />
				<DialogItem userName='Alex' id='4' />
				<DialogItem userName='Valery' id='5' />
				<DialogItem userName='Alina' id='6' />
			</ul>
			<ul className={s.messages}>
				<Message content='Hi' classMsg={s.sended} />
				<Message content="It's me" classMsg={s.sended} />
				<Message content="How are you?" classMsg={s.sended} />
				<Message content="Yo" classMsg={s.recived} />
				<Message content="Fine" classMsg={s.recived} />
			</ul>
		</div>
	)
}

export default Dialogs