import React from 'react'
import s from './Friends.module.css'
import { NavLink } from 'react-router-dom';
import Friends from "./Friends";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
	sideBar: state.sideBar
})

const FriendsContainer = connect(mapStateToProps)(Friends)
export default FriendsContainer