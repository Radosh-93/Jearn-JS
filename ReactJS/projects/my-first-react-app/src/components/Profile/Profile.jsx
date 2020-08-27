import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Common/Preloader/Preloader";

const Profile = (props) => {
	if (!props.userData || props.isFetching) return <Preloader/>
	return (
		<div className="profile_container">
			<ProfileInfo  profile={props.userData}
						  status={props.userStatus}
						  updateUserStatus={props.updateUserStatus}/>
			<MyPostsContainer/>
		</div>
	)
}
export default Profile