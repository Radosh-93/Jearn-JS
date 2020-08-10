import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post';



const MyPosts = (props) => {
	console.log(props + "myposts")
	let postsElements = props.postsData.map(
		(el, i) => <Post msg={el.content} likesCount={el.likesCount} key={i} />);

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		alert(text)
	}

	return (
		<div className={s.posts}>
			<h3>My posts</h3>
			<form>
				<textarea ref={newPostElement} placeholder="your news..."></textarea>
				<button onClick={addPost}>Add post</button>
			</form>
			{postsElements}
		</div>
	)
}
export default MyPosts;