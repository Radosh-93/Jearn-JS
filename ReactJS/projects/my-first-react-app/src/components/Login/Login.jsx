import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reduser";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                       name={'email'}
                       validate={[requiredField]}
                       type={'text'}
                       placeholder={'Email'} /> {/*Field замість input*/}
            </div>
            <div>
                <Field component={Input}
                       name={'password'}
                       type={'password'}
                       validate={[requiredField]}
                       placeholder={'Password'} />
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'} /> remember me
            </div>

            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    form: 'login' // огортаємо контейнерною компонентою reduxForm, називаємо форму
})(LoginForm)
const Login = (props) => {
    const onSubmit = ({email, password, rememberMe}) => {
        props.login(email, password, rememberMe)
    }
    if (props.isLogging) {
        return <Redirect to={`profile/${props.userId}`}/>
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
let mapStateToProps = (state) => ({
    isLogging: state.auth.isLogging,
    userId: state.auth.userId
})
export default connect(mapStateToProps, {login})(Login)