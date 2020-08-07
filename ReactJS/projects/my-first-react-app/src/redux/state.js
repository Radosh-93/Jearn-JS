let state = {
	profilePage: {
		postsData: [
			{ id: 1, content: 'Hey, why nobody love me?', likesCount: 15 },
			{ id: 2, content: 'Wow, I still learn React!', likesCount: 8 },
			{ id: 2, content: 'Some text in the post...', likesCount: 3 },
			{ id: 3, content: 'Kukaracha bla bla...', likesCount: 5 },
			{ id: 4, content: 'Bugaga buzinga...', likesCount: 5 },
		],
	},
	dialogsPage: {
		usersData: [
			{ name: 'Dimych', id: 1 },
			{ name: 'Andey', id: 2 },
			{ name: 'Sveta', id: 3 },
			{ name: 'Alex', id: 4 },
			{ name: 'Valery', id: 5 },
			{ name: 'Alina', id: 6 }
		],
		messagesData: [
			{ id: 1, content: 'hi', classMsg: 'sended' },
			{ id: 2, content: "It's me", classMsg: 'sended' },
			{ id: 3, content: "How are you?", classMsg: 'sended' },
			{ id: 4, content: "Yo", classMsg: 'recived' },
			{ id: 5, content: "Fine", classMsg: 'recived' },
		]
	}


}

export default state;