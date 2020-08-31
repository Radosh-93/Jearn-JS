//import React from 'react';
import {addPost} from '../../../redux/profile-reducer'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
	postsData: state.profilePage.postsData
})
const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)

export default MyPostsContainer;