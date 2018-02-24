import React from 'react';


export default props => {
    if(props.type === 'radio' || props.type === 'checkbox') {
        return (
            <div className={props.cols}>
                <input {...props.input} name={props.name} id={props.id} type={props.type} required />
                <label htmlFor={props.id}>{props.label}</label>
            </div>
        );
    } else {
        return (
            <div className={props.cols}>
                <label htmlFor={props.name}>{props.label}</label>
                <input {...props.input} name={props.name} id={props.name} placeholder={props.placeholder} type={props.type} maxLength={props.maxlength} required />
            </div>
        );
    }
};