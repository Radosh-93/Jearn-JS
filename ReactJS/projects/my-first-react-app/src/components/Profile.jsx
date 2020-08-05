import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
	return (
		<main className={s.content}>
			<div className={s.wallpaper}>
				<img src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png" />
			</div>
			<div className={s.profile_information}>
				<img src="https://selfie2anime.com/img/carousel/2.jpg" />
				<div className={s.about_profile}>
					<p>Dmitry K.</p>
					<span>Date of Birth: 2 January</span>
					<span>City: Minsk</span>
					<span>Education: BSU '11</span>
					<span>Web Site: <a href="https://www.it-kamasutra.com">https://www.it-kamasutra.com</a></span>
				</div>
			</div>
			<div className={s.posts}>
				<h3>My posts</h3>
				<form>
					<textarea placeholder="your news..."></textarea>
					<button>Send</button>
				</form>
				<div className={s.users_posts}>
					<img className={s.icon} src="" />
					<p>Hey, why nobody love me?</p>
				</div>
				<div className={s.users_posts}>
					<img className={s.icon} src="" />
					<p>It's our new programm! Hey!</p>
				</div>
				<div className={s.users_posts}>
					<img className={s.icon} src="" />
					<p>Sometext in the body</p>
				</div>
			</div>
		</main>
	)
}
export default Profile