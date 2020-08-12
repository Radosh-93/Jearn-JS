const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let msg = {
				id: 6,
				content: state.newMessageText,
				classMsg: 'sended'
			};
			state.messagesData.push(msg);
			state.newMessageText = '';
			return state;
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.newText;
			return state;
		default:
			return state
	}
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextCreator = (text) => (
	{ type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
)

export default dialogsReducer