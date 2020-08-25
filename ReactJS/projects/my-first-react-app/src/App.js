import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
	return (
		<div className="app-wrapper">
			<Header/>
			<Navigation store={props.store}/>
			<main className='content'>
				{/* <Route path='/dialogs' component={Dialogs} /> */}
				<Route path='/dialogs'
							 render={() => <DialogsContainer/>}/>
				{/* <Route path='/profile' component={Profile} /> */}
				<Route path='/profile/:userId?'
							 render={() => <ProfileContainer/>}/>
				<Route path='/users'
               render={() => <UsersContainer/>}/>
				<Route path='/feed' component={News}/>
				<Route path='/music' component={Music}/>
				<Route path='/settings' component={Settings}/>
			</main>
		</div>
	);
}

export default App;
