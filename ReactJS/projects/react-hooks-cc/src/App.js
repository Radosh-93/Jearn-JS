import React from 'react';
import './App.css';
import {NavLink, Route, Switch} from "react-router-dom";
import {UseState} from "./components/UseState";
import {UseEffect} from "./components/useEffect";

function App() {
	return (
		<div className="App">
			<h1>React Hooks</h1>
			<p><b>Hooks</b> — это функции, с помощью которых вы можете «подцепиться» к состоянию и методам жизненного
				цикла React из функциональных компонентов.</p>
			<ul className='nav nav-tabs'>
				<li className='nav-item'>
					<NavLink to='/state' className='nav-link' activeClassName={'active'}>useState()</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink to='/effect' className='nav-link' activeClassName={'active'}>useEffects()</NavLink>
				</li>
			</ul>
			<Switch>
				<Route path='/state' render={() => <UseState/>}/>
				<Route path='/effect' render={() => <UseEffect/>}/>
			</Switch>
		</div>
	);
}

export default App;
