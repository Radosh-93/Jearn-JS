import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import {Field, reduxForm, reset} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLength, requiredField} from "../../utils/validators/validators";

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));
const maxLength50 = maxLength(50);

const MessageForm = (props) => {
	// Style
	const classes = useStyles();
	// Style
	return(
		<form className={s.input_block} onSubmit={props.handleSubmit}>
			<Field
				component={Textarea}
				name={'message'}
				validate={[requiredField, maxLength50]}
				className={s.input_field}
				placeholder='Write a message...'
				multiline='true'
				rows={2} />
			<Button
				type={'submit'}
				variant="contained"
				color="primary"
				className={classes.button}
				endIcon={<SendIcon />}
				>
				Send
			</Button>
		</form>
	)
}

const MessageReduxForm = reduxForm({form: 'message'})(MessageForm)

const Dialogs = (props) => {
	let usersElements = props.dialogsPage.usersData.map(
		el => (<DialogItem userName={el.name} id={el.id} key={el.id} img={el.img} />)
	);
	let userMessagesElements = props.dialogsPage.messagesData.map(
		el => (<Messages content={el.content} classMsg={el.classMsg} key={el.id} />)
	);

	let onSubmit = (formData) => {
		if (formData.message !== undefined) {
			props.sendMessage(formData.message);
		}
		props.dispatch(reset('message'))
	}
	return (
		<div className={s.dialogs}>
			<ul className={s.dialogs_items}>
				{usersElements}
			</ul>
			<div className={s.messages}>
				{userMessagesElements}
				<MessageReduxForm onSubmit={onSubmit}/>
			</div>
		</div>
	)
}

export default Dialogs