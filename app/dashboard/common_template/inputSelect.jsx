import React from 'react';

export default props => {
    return (
        <div className="12u">
            <label htmlFor="demo-category">demo-category</label>
            <div className="select-wrapper">
                <select name="demo-category" id="demo-category">
                <option value="">- Category -</option>
                <option value="1">Manufacturing</option>
                <option value="1">Shipping</option>
                <option value="1">Administration</option>
                <option value="1">Human Resources</option>
                </select>
            </div>
        </div>
    );
};