import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Common/Preloader/Preloader";

const Profile = (props) => {
	if (!props.userData || props.isFetching) return <Preloader/>
	return (
		<div>
			<ProfileInfo  profile={props.userData}/>
			<MyPostsContainer/>
		</div>
	)
}
export default Profile