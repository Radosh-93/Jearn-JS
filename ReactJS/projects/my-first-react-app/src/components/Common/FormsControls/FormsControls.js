import React from "react";
import s from './FormControls.module.css'
export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={s.formControl + ' ' + (meta.touched && meta.error ? s.error : '')}>
            <textarea {...props} {...input}/>
            {meta.touched && meta.error && <span>some error</span>}
        </div>
    )
}