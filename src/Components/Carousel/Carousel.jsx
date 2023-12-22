import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css'
const ImageCarousel = ({ images }) => {
    return (
        <Carousel>
            {images.map((imageUrl, index) => (
                <Carousel.Item key={index}>
                    <img className="d-block w-100 imagen-carrusel" src={imageUrl} alt={`Slide ${index + 1}`} />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};
export default ImageCarousel;