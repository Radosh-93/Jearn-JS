import React from 'react'
import './Messages.css'

const Message = (props) => {
	return (
		<div className={`message ${props.classMsg}`}>
			<span>{props.content}</span>
		</div>
	)
}

export default Message