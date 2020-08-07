import React from 'react'
import './Messages.css'

const Message = (props) => {
	return (
		<li className={`message ${props.classMsg}`}>
			<span>{props.content}</span>
		</li>
	)
}

export default Message