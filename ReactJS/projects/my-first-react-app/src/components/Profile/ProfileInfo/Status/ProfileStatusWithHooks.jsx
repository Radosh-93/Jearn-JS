import React, {useEffect, useState, useCallback} from "react";
import EditIcon from '@material-ui/icons/Edit';

const ProfileStatusWithHooks = (props) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);
	let [isActive, setIsActive] = useState(false);

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])


	const onStatusChange = (e) => {
		setStatus(e.target.value)
	}
	const activateEditMode = () => {
		setEditMode(true)
	}
	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateUserStatus(status);
		setIsActive(false);
	}
	return (
		<div className='profile_card_status'>
			{props.userId === props.authorizedUserId
				? !editMode
					? <div className='post_status' onMouseEnter={() => setIsActive(true)}
					       onMouseLeave={() => setIsActive(false)}>
						<span>{props.status || '--------'}</span>
						{isActive
							? <EditIcon onClick={activateEditMode} className='btn_icon' fontSize='small'/>
							: ''}
					</div>
					: <div>
						<input type="text"
						       onChange={onStatusChange}
						       autoFocus={true}
						       value={status}
						       onBlur={deactivateEditMode}/>
					</div>
				: <span>
				    {props.status || '--------'}
				</span>}
		</div>
	)
}
export default ProfileStatusWithHooks