import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
	return (
		<div>
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
			<MyPosts />
		</div>
	)
}
export default Profile