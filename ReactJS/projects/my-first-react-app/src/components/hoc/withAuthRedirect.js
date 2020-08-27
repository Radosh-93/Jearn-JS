import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
let mapStateToPropsRedirect = (state) => ({
    isLogging: state.auth.isLogging
})
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isLogging) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }
    }
    return connect(mapStateToPropsRedirect)(RedirectComponent)
}