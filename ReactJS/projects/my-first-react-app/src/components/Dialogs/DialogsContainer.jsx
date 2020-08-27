//import React from 'react'
import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/dialog-reducer'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
	dialogsPage: state.dialogsPage,
	isLogging: state.auth.isLogging
})
let mapDispatchToProps = (dispatch) => ({
	sendMessage: () => {
		dispatch(sendMessageCreator())
	},
	onChangeMessage: (text) => {
		dispatch(updateNewMessageTextCreator(text))
	}
	})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer