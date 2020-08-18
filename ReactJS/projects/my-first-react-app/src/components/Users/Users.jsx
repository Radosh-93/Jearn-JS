import React from "react";
import s from './Users.module.css'
import { Button } from '@material-ui/core';
import * as axios from "axios";
import userPhoto from '../../assets/images/user_img.png'

class Users extends React.Component{
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				console.log(response);
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}
	onPageChanged = (p) => {
		this.props.setCurrentPage(p);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)})

	}
	render() {
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		}

		return (
			<div className={s.users_page}>
				<h1 className={s.main_title}>Users</h1>
				<div className={s.pagination}>
					{pages.map((p, i) => {
						if( p <= 10) {
							return <span onClick={()=> {this.onPageChanged(p)}} className={p === this.props.currentPage && s.selectedPage} key={i}>{p}</span>
					}})}
				</div>
				{this.props.usersData.map(el => (
					<div key={el.id} className={s.user_block}>
						<img className={s.photo} src={el.photos.small !== null ? el.photos.small : userPhoto} alt='photo' />
						{el.followed ? <Button
							onClick={() => { this.props.onUnfollow(el.id) }}
							variant="contained"
							color="secondary"
							className={`${s.btn}`}>
							Unfollow
						</Button> : <Button
							onClick={() => { this.props.onFollow(el.id) }}
							variant="contained"
							color="primary"
							className={`${s.btn}`}>
							Follow
						</Button>}
						<div className={s.about_user}>
							<span className={s.name}>{el.name}</span>
							<span className={s.location}>{"${el.location.city}, ${el.location.country}"}</span>
							<span className={s.status}>{el.status}</span>
						</div>
					</div>))}
			</div>
		)
	}

}

export default Users