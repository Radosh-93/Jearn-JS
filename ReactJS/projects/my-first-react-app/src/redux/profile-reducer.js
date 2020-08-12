const profileReducer = (state, action) => {
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

	return state;
}