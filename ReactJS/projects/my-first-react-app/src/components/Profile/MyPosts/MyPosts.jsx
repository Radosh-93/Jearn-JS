import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { updateNewPostTextCreator, addPostCreator } from '../../../redux/state'


const MyPosts = (props) => {

	let postsElements = props.postsData.map(
		(el, i) => <Post msg={el.content} likesCount={el.likesCount} key={i} />);

	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch(addPostCreator());
	};
	let onChangePost = () => {
		let text = newPostElement.current.value;
		let action = updateNewPostTextCreator(text);
		props.dispatch(action);
	}

	return (
		<div className={s.posts}>
			<h3>My posts</h3>
			<div id="form">
				<textarea onChange={onChangePost} className={s.post_input} ref={newPostElement} placeholder="your news..." value={props.newPostText} />
				<button onClick={addPost}>Add post</button>
			</div>
			{postsElements}
		</div>
	)
}
export default MyPosts;