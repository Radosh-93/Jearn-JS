const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
	_state: {
		profilePage: {
			postsData: [
				{ id: 1, content: 'Hey, why nobody love me?', likesCount: 15 },
				{ id: 2, content: 'Wow, I still learn React!', likesCount: 8 },
				{ id: 2, content: 'Some text in the post...', likesCount: 3 },
				{ id: 3, content: 'Kukaracha bla bla...', likesCount: 5 },
				{ id: 4, content: 'Bugaga buzinga...', likesCount: 5 },
			],
			newPostText: 'it-kamasutra.com'
		},
		dialogsPage: {
			messagesData: [
				{ id: 1, content: 'hi', classMsg: 'sended' },
				{ id: 2, content: "It's me", classMsg: 'sended' },
				{ id: 3, content: "How are you?", classMsg: 'sended' },
				{ id: 4, content: "Yo", classMsg: 'recived' },
				{ id: 5, content: "Fine", classMsg: 'recived' },
			],
			newMessage: ''
		},
		usersData: [
			{ id: 1, name: 'Dimych', img: 'https://www.meme-arsenal.com/memes/d7a0ccde363c86b4b25457671e0a052b.jpg' },
			{ id: 2, name: 'Andey', img: 'https://www.meme-arsenal.com/memes/5da8de38994bdba84654fd5f64e9fdc0.jpg' },
			{ id: 3, name: 'Sveta', img: 'https://i.pinimg.com/236x/e9/25/f7/e925f77a990b2c0f74f595a4a921890a.jpg' },
			{ id: 4, name: 'Alex', img: 'https://i.pinimg.com/736x/7e/9e/08/7e9e08555d633b03b254bd819bd9335a.jpg' },
			{ id: 5, name: 'Valery', img: 'https://i.pinimg.com/736x/3b/0d/cb/3b0dcbe0358e163382d99d8fe4440306.jpg' },
			{ id: 6, name: 'Alina', img: 'https://pm1.narvii.com/7022/b27d2a21719f0471e034271f26e54e025a8d2a03r1-530-663v2_uhq.jpg' }
		],
	},
	_callSubscriber() {
		console.log('State changed')
	},

	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},

	dispatch(action) { //{ type: 'ADD-POST'}
		if (action.type === ADD_POST) {
			let post = { id: 5, content: this._state.profilePage.newPostText, likesCount: 0 }
			this._state.profilePage.postsData.push(post);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		}
		else if (action.type === UPDATE_NEW_POST_TEXT) { // {type: 'UPDATE-NEW-POST-TEXT', newText: 'text'}
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}
		else if (action.type === SEND_MESSAGE) {
			let msg = { id: 6, content: this._state.dialogsPage.newMessage, classMsg: 'sended' };
			this._state.dialogsPage.messagesData.push(msg);
			this._state.dialogsPage.newMessage = '';
			this._callSubscriber(this._state);
		}
		else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
			this._state.dialogsPage.newMessage = action.newText;
			this._callSubscriber(this._state);
		}
	}
}


export const addPostActionCreator = () => (
	{ type: ADD_POST }
)
export const updateNewPostTextActionCreator = (text) => (
	{ type: UPDATE_NEW_POST_TEXT, newText: text }
)
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextActionCreator = (text) => (
	{ type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
)
export default store;