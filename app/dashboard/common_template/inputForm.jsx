import React from 'react';


export default props => {
    if(props.type === 'radio' || props.type === 'checkbox') {
        return (
            <div className={props.colsGrid}>
                <input {...props.input} name={props.name} id={props.id} type={props.type} />
                <label htmlFor={props.id}>{props.label}</label>
            </div>
        );
    } else if(props.type === 'textarea') {
        return (
            <div className={props.colsGrid}>
                <label htmlFor={props.name}>{props.label}</label>
                <textarea {...props.input} name={props.name} id={props.name} placeholder={props.placeholder} maxLength={props.maxlength}></textarea>
            </div>
        );
    } else {
        return (
            <div className={props.colsGrid}>
                <label htmlFor={props.name}>{props.label}</label>
                <input {...props.input} name={props.name} id={(props.id) ? props.id : props.name} placeholder={props.placeholder} type={props.type} maxLength={props.maxlength} />
            </div>
        );
    }
};