import React from 'react';
import { updateNewPostTextCreator, addPostCreator } from '../../../redux/profile-reducer'
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
	let state = props.store.getState();
	let addPost = () => {
		props.store.dispatch(addPostCreator());
	};
	let updateNewPostText = (text) => {
		let action = updateNewPostTextCreator(text);
		props.store.dispatch(action);
	}


	return (
		<MyPosts
			addPost={addPost}
			updateNewPostText={updateNewPostText}
			postsData={state.profilePage.postsData}
			newPostText={state.profilePage.newPostText}/>
	)
}
export default MyPostsContainer;