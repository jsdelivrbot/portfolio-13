import React from 'react';

export default props => {
    return (
        <div className={props.colsGrid}>
            <label htmlFor={props.name}>{props.label}</label>
            <textarea 
                {...props.input} 
                name={props.name} 
                id={props.name} 
                placeholder={props.placeholder} 
                maxLength={props.maxlength}
                >
            </textarea>
        </div>
    );
};