import React from 'react';

export default props => {
    return (
        <div className={props.colsGrid}>
            <label htmlFor={props.name}>{props.label}</label>
            <input 
                {...props.input} 
                name={props.name} 
                id={(props.id) ? props.id : props.name} 
                placeholder={props.placeholder} 
                type={props.type} 
                maxLength={props.maxlength} 
            />
        </div>
    );
};