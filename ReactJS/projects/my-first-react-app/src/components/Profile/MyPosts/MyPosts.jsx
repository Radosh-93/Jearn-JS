import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Field, reduxForm} from "redux-form";
/*style*/
const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1)
	},
}));
/*style*/
const PostForm = (props) => {
	// Style
	const classes = useStyles();
	// Style
	return (
		<form id="form" onSubmit={props.handleSubmit}>
			<Field
				component={'textarea'}
				name={'post'}
				className={s.post_input}
				placeholder="your news..."/>
			<Button
				type={'submit'}
				variant="contained"
				color="primary"
				className={classes.button}>
				Add post
			</Button>
		</form>
	)
}
const PostReduxForm = reduxForm({form: 'post'})(PostForm)
const MyPosts = (props) => {
	let postsElements = props.postsData.slice(0).reverse().map(
		el => <Post msg={el.content} likesCount={el.likesCount} key={el.id} />);

	let addNewPost = (formData) => {
		if(formData.post !== undefined) {
			props.addPost(formData.post)
		}
	};
	return (
		<div className={s.posts}>
			<h3>My posts</h3>
			<PostReduxForm onSubmit={addNewPost}/>
			{postsElements}
		</div>
	)
}
export default MyPosts;