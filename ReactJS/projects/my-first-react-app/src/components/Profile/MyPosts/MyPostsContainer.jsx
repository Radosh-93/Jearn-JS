//import React from 'react';
import { updateNewPostTextCreator, addPostCreator } from '../../../redux/profile-reducer'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
	postsData: state.profilePage.postsData,
	newPostText: state.profilePage.newPostText
})
const mapDispatchToProps = (dispatch) => ({
	addPost: () => {
		dispatch(addPostCreator())
	},
	updateNewPostText: (text) => {
		let action = updateNewPostTextCreator(text);
		dispatch(action);
	}
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;