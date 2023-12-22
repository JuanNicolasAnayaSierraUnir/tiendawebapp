import React from 'react';

const Textarea  = ({label, rows,id,placeholder}) => {
    return (

        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">{label}</label>
            <textarea rows={rows} className="form-control" id={id} placeholder={placeholder}/>
        </div>
    );
};
export default Textarea;