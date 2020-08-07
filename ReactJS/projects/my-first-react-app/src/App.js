import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <main className='content'>
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
          <Route path='/feed' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
