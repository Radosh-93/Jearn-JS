import React from 'react'
import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/dialog-reducer'
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
	let state = props.store.getState();

	let sendMessage = () => {
			props.store.dispatch(sendMessageCreator())
	}
	let onChangeMessage = (text) => {
		props.store.dispatch(updateNewMessageTextCreator(text));
	}


	return (
		<Dialogs sendMessage={sendMessage}
						 onChangeMessage={onChangeMessage}
						 dialogsPage={state.dialogsPage}/>
	)
}

export default DialogsContainer