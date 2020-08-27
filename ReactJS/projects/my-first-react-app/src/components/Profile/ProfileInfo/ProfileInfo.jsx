import React from 'react'
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/user_img.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import ProfileStatus from "./Status/ProfileStatus";

const ProfileInfo = (props) => {
	return (
		<div>
			{/*<div className={s.wallpaper}>*/}
			{/*	<img src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png" alt=''/>*/}
			{/*</div>*/}
			<div className={s.profile_information}>
				<img src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto} alt=''/>
				<div className={s.about_profile}>
					<p className={s.fullname}>{props.profile.fullName}</p>
					<span className={s.status}>Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</span>
					{props.profile.lookingForAJob ? <span className={s.status}>{props.profile.lookingForAJobDescription}</span> : null}
					<div className={s.contacts}>Contacts:
						<a rel='noopener noreferrer' target='_blank' href={`https://${props.profile.contacts.facebook}`}><FacebookIcon/></a>
						<a rel='noopener noreferrer' target='_blank' href={`https://${props.profile.contacts.github}`}><GitHubIcon/></a>
						<a rel='noopener noreferrer' target='_blank' href={`https://${props.profile.contacts.instagram}`}><InstagramIcon/></a>
						<a rel='noopener noreferrer' target='_blank' href={`https://${props.profile.contacts.twitter}`}><TwitterIcon/></a>
					</div>
					<span>City: Minsk</span>
					<span>Education: BSU '11</span>
					<span>Web Site: <a href="https://www.it-kamasutra.com">https://www.it-kamasutra.com
					</a>
					</span>
				</div>
			</div>
			<ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
		</div>
	)
}

export default ProfileInfo