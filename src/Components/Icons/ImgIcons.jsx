import React from 'react';
import './ImgIcons.css';

const ImgIcons = ({src, alt}) => {
    return (
        <img className="img-icon" src={src} alt={alt}/>
    );
};

export default ImgIcons;