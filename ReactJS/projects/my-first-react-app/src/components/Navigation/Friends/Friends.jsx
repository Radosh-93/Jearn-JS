import React from 'react'
import s from './Friends.module.css'
import { NavLink } from 'react-router-dom';

const Friends = (props) => {
	let userItem = props.userInfo.map((el, i) => {
		if (i < 3) {
			return (
				<NavLink to={`/profile/${el.id}`}
								 href="#" className={s.item}
								 key={i}>
					<img className={s.image} src={el.img} alt={el.name} />
					<span className={s.name}>{el.name}</span>
				</NavLink>)
		}
	});

	return (
		<div className={s.main_block}>
			<span className={s.title}>Friends</span>
			{userItem}
		</div>
	)
}

export default Friends