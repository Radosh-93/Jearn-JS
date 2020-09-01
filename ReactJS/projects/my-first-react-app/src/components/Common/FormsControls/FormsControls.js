import React from "react";
import s from './FormControls.module.css'

const FormControls = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            {props.children}
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    let {input, meta, ...restProps} = props
    return (
        <FormControls {...props}><textarea {...restProps} {...input}/></FormControls>
    )
}
export const Input = (props) => {
    let {input, meta, ...restProps} = props
    return (
        <FormControls {...props}><input {...restProps} {...input}/></FormControls>
    )
}
