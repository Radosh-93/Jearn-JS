import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post';



const MyPosts = (props) => {

	let postsElements = props.postsData.map(
		(el, i) => <Post msg={el.content} likesCount={el.likesCount} key={i} />
	)

	return (
		<div className={s.posts}>
			<h3>My posts</h3>
			<form>
				<textarea placeholder="your news..."></textarea>
				<button>Send</button>
			</form>
			{postsElements}
		</div>
	)
}
export default MyPosts;