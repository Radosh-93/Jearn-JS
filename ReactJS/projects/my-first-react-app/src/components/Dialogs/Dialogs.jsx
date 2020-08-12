import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'
import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/state'

const Dialogs = (props) => {

	let newMsgText = props.state.dialogsPage.newMessageText;

	let usersElenents = props.state.usersData.map(
		(el, i) => (<DialogItem userName={el.name} id={el.id} key={i} img={el.img} />)
	);
	let userMessagesElements = props.state.dialogsPage.messagesData.map(
		(el, i) => (<Messages content={el.content} classMsg={el.classMsg} key={i} />)
	); //ввваіа

	let sendMessage = () => {
		if (newMsgText !== '') {
			props.dispatch(sendMessageCreator())
		}
	}
	let onChangeMessage = (e) => {
		let text = e.target.value;
		props.dispatch(updateNewMessageTextCreator(text));
	}


	return (
		<div className={s.dialogs}>
			<ul className={s.dialogs_items}>
				{usersElenents}
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