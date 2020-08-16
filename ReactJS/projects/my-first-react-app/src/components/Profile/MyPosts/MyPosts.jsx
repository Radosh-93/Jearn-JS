import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1)
	},
}));

const MyPosts = (props) => {
	// Style
	const classes = useStyles();
	// Style

	let postsElements = props.postsData.slice(0).reverse().map(
		el => <Post msg={el.content} likesCount={el.likesCount} key={el.id} />);

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost()
	};
	let onChangePost = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text)
	}


	return (
		<div className={s.posts}>
			<h3>My posts</h3>
			<div id="form">
				<textarea onChange={onChangePost} className={s.post_input} ref={newPostElement} placeholder="your news..." value={props.newPostText} />
				<Button
					onClick={onAddPost}
					variant="contained"
					color="primary"
					className={classes.button}>
					Add post
				</Button>
			</div>
			{postsElements}
		</div>
	)
}
export default MyPosts;