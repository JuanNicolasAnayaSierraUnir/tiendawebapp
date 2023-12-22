import React from 'react';

const File  = ({label,id}) => {
    return (

        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input className="form-control" type="file" id={id} multiple/>
        </div>
    );
};
export default File;