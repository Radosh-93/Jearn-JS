import React from 'react'
import s from './Friends.module.css'
import { NavLink } from 'react-router-dom';
import Friends from "./Friends";

const FriendsContainer = (props) => {
	let sideBar = props.store.getState().sideBar;

	return (
		<Friends sideBar={sideBar}/>
	)
}

export default FriendsContainer