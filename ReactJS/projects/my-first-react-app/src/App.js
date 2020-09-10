import React, {Suspense} from 'react';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import store from "./redux/redux-store";
import {initializeApp} from "./redux/app-reducer";

//styling
import './App.css';

//components
import Navigation from './components/Navigation/Navigation';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Preloader from "./components/Common/Preloader/Preloader";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
//import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <Route path='/:page?/:userId?' render={() => <HeaderContainer/>}/>
                <Navigation/>
                <main className='content'>

                    {/* <Route path='/profile' component={Profile} /> */}
                    <Route path='/profile/:userId?'
                           render={() => (
                               <Suspense fallback={<Preloader/>}>
                                   <ProfileContainer/>
                               </Suspense>)}/>
                    {/* <Route path='/dialogs' component={Dialogs} /> */}
                    <Route path='/dialogs'
                           render={() => (
                               <Suspense fallback={<Preloader/>}>
                                   <DialogsContainer/>
                               </Suspense>)}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/feed' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </main>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
const AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);

const AppMain = () => (
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>{/*state={state} dispatch={store.dispatch.bind(store)}*/}
        </Provider>
    </BrowserRouter>
)
export default AppMain
