import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostText, sendMessage, updateNewMesageText } from './redux/state'

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} sendMessage={sendMessage} updateNewMesageText={updateNewMesageText} />,
		document.getElementById('root')
	);
};