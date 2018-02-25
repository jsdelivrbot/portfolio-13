import React from 'react';

export default props => {
    return (
        <div className={props.colsGrid}>
            <input 
                {...props.input} 
                name={props.name} 
                id={props.id} 
                type={props.type} 
            />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
};