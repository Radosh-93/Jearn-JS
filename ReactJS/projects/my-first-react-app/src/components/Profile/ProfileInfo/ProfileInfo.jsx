import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader/>
	}
	return (
		<div>
			<div className={s.wallpaper}>
				<img src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"/>
			</div>
			<div className={s.profile_information}>
				<img src={props.profile.photos.large}/>
				<div className={s.about_profile}>
					<p>{props.profile.fullName}</p>
					<span>Date of Birth: 2 January</span>
					<span>City: Minsk</span>
					<span>Education: BSU '11</span>
					<span>Web Site: <a href="https://www.it-kamasutra.com">https://www.it-kamasutra.com
					</a>
					</span>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo