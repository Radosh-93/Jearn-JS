import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'

const Dialogs = (props) => {

	let usersElenents = props.state.usersData.map(
		(el, i) => (<DialogItem userName={el.name} id={el.id} key={i} />)
	);
	let userMessagesElements = props.state.messagesData.map(
		(el, i) => (<Messages content={el.content} classMsg={el.classMsg} key={i} />)
	);

	return (
		<div className={s.dialogs}>
			<ul className={s.dialogs_items}>
				{usersElenents}
			</ul>
			<ul className={s.messages}>
				{userMessagesElements}
			</ul>
		</div>
	)
}

export default Dialogs