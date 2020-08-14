import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
	let postsElements = props.postsData.map(
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
				<button onClick={onAddPost}>Add post</button>
			</div>
			{postsElements}
		</div>
	)
}
export default MyPosts;