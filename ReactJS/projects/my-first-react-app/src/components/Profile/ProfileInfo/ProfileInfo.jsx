import React from 'react'
import s from './ProfileInfo.module.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const ProfileInfo = (props) => {
	console.log(props.profile.contacts)
	return (
		<div>
			<div className={s.wallpaper}>
				<img src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png" alt=''/>
			</div>
			<div className={s.profile_information}>
				<img src={props.profile.photos.large} alt=''/>
				<div className={s.about_profile}>
					<p>{props.profile.fullName}</p>
					<span>Contacts:
						<a href={props.profile.contacts.facebook}><FacebookIcon/></a>
						<a href={props.profile.contacts.github}><GitHubIcon/></a>
						<a href={props.profile.contacts.instagram}><InstagramIcon/></a>
					</span>
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