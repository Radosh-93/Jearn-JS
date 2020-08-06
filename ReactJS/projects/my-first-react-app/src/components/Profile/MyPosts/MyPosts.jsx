import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div className={s.posts}>
			<h3>My posts</h3>
			<form>
				<textarea placeholder="your news..."></textarea>
				<button>Send</button>
			</form>
			<Post msg='Hey, why nobody love me?' likesCount='15' />
			<Post msg='Wow, I still learn React!' likesCount='8' />
			<Post msg='Some text in the post...' likesCount='3' />

		</div>
	)
}
export default MyPosts;