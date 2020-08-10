import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'

const Dialogs = (props) => {

	let usersElenents = props.state.usersData.map(
		(el, i) => (<DialogItem userName={el.name} id={el.id} key={i} img={el.img} />)
	);
	let userMessagesElements = props.state.dialogsPage.messagesData.map(
		(el, i) => (<Messages content={el.content} classMsg={el.classMsg} key={i} />)
	);

	let newMsgElement = React.createRef();

	let sendMessage = () => {
		let text = newMsgElement.current.value;
		alert(text);
	}

	return (
		<div className={s.dialogs}>
			<ul className={s.dialogs_items}>
				{usersElenents}
			</ul>
			<ul className={s.messages}>
				{userMessagesElements}
				<li className={s.input_block} ><textarea className={s.input_field} rows="2" ref={newMsgElement}></textarea>
					<button onClick={sendMessage}>Send</button>
				</li>
			</ul>
		</div>
	)
}

export default Dialogs