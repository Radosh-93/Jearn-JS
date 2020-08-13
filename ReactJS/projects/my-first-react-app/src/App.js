import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation store={props.store} />
      <main className='content'>
        {/* <Route path='/dialogs' component={Dialogs} /> */}
        <Route path='/dialogs'
          render={() => <DialogsContainer
            store={props.store} />} />
        {/* <Route path='/profile' component={Profile} /> */}
        <Route path='/profile'
          render={() => <Profile store={props.store} />} />
        <Route path='/feed' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </main>
    </div>
  );
}

export default App;
