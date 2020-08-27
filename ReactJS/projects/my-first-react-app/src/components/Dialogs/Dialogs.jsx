import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

const Dialogs = (props) => {
	// Style
	const classes = useStyles();
	// Style

	let newMsgText = props.dialogsPage.newMessageText

	let usersElements = props.dialogsPage.usersData.map(
		el => (<DialogItem userName={el.name} id={el.id} key={el.id} img={el.img} />)
	);
	let userMessagesElements = props.dialogsPage.messagesData.map(
		el => (<Messages content={el.content} classMsg={el.classMsg} key={el.id} />)
	); //ввваіа

	let sendMessage = () => {
		if (newMsgText !== '') {
			props.sendMessage();
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
					<TextField
						className={s.input_field}
						onChange={onChangeMessage}
						placeholder='Write a message...'
						value={newMsgText}
						multiline
						rows={2} />
					<Button
						onClick={sendMessage}
						variant="contained"
						color="primary"
						className={classes.button}
						endIcon={<SendIcon />}>
						Send
					</Button>
				</li>
			</ul>
		</div>
	)
}

export default Dialogs