import React from 'react';

const Input = ({label, type,id,placeholder}) => {
    return (
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">{label}</label>
            <input type={type} className="form-control" id={id} placeholder={placeholder}/>
        </div>
    );
};
export default Input