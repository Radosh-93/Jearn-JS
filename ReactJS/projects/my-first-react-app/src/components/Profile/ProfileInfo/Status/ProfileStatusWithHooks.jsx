import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

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
        props.updateUserStatus(status)
    }
    return (
        <div>
            {!editMode
                ? <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '--------'}</span>
                </div>
                : <div>
                    <input type="text"
                           onChange={onStatusChange}
                           autoFocus={true}
                           value={status}
                           onBlur={deactivateEditMode}/>
                </div>
            }
        </div>
    )
}
export default ProfileStatusWithHooks