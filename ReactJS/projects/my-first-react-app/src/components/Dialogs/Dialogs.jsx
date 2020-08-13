import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'

const Dialogs = (props) => {
	let newMsgText = props.dialogsPage.newMessageText

	let usersElements = props.dialogsPage.usersData.map(
		(el, i) => (<DialogItem userName={el.name} id={el.id} key={i} img={el.img} />)
	);
	let userMessagesElements = props.dialogsPage.messagesData.map(
		(el, i) => (<Messages content={el.content} classMsg={el.classMsg} key={i} />)
	); //ввваіа

	let sendMessage = () => {
		if (newMsgText !== '') {
			props.sendMessage()
		}
	}
	let onChangeMessage = (e) => {
		let text = e.target.value;
		props.onChangeMessage(text);
	}


	return (
		<div className={s.dialogs}>
			<ul className={s.dialogs_items}>
				{usersElements}
			</ul>
			<ul className={s.messages}>
				{userMessagesElements}
				<li className={s.input_block} >
					<textarea className={s.input_field}
						onChange={onChangeMessage}
						rows="2"
						value={newMsgText} />
					<button onClick={sendMessage}>Send</button>
				</li>
			</ul>
		</div>
	)
}

export default Dialogs