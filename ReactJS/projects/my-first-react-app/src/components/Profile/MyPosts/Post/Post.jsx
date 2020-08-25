import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
	return (
		<div className={s.users_posts}>
			<img className={s.icon} src="https://selfie2anime.com/img/carousel/2.jpg" alt=''/>
			<div className={s.block_post}>
				<p>{props.msg}</p>
				<div className={s.buttons}>
					<button className={s.btn}>Like {props.likesCount}</button>
					<button className={s.btn}>Dislike</button>
				</div>
			</div>
		</div>
	)
}
export default Post