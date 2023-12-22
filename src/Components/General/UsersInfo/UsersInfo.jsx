import React from "react";
import './UsersInfo.css'
const UsersInfo = ({src, alt, name,cel}) => {
    return(
        <div className="text-center justify-content-center mt-3">
            <img src={src} alt={alt} className="imagenUsuario" />
            <h1>{name}</h1>
            <label> Cel: {cel} </label>
            <hr/>
        </div>
    );
};

export default UsersInfo;