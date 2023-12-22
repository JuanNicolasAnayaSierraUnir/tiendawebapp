import React from 'react';
import ImageCarousel from "../../Components/Carousel/Carousel";
import carousel1 from "../../Image/Carrusel1.jpg"
import carousel2 from "../../Image/Carrusel2.jpg"
import carousel3 from "../../Image/Carrusel3.jpg"
import carousel4 from "../../Image/Carrusel4.jpg"

const UserForm = () => {
    const images = [
        carousel1,
        carousel2,
        carousel3,
        carousel4,
    ];

    return (

        <div className="card">
            <div className="card-header text-center">
                Home
            </div>
            <div className="card-body text-center align-content-center">
                <h1 className="card-title">Tienda ReGon</h1>
                <h3 className="card-title">¡Bienvenido a Tienda ReGon, tu destino de compras preferido!</h3>
                <div className="row">
                    <div className="col-2">
                    </div>
                    <div className="col-8">
                        <ImageCarousel images={images} />
                    </div>
                    <div className="col-2">
                    </div>
                </div>
                <p className="card-text mt-3">En Tienda ReGon nos enorgullece recibirte con los brazos abiertos para ofrecerte una experiencia de compra única y satisfactoria. Nuestro compromiso es brindarte productos de la más alta calidad, variedad y frescura, para que encuentres todo lo que necesitas en un solo lugar.

                    En cada pasillo de Tienda ReGon descubrirás una cuidada selección de productos, desde alimentos frescos y deliciosos hasta artículos de cuidado personal, hogar y mucho más. Además, nuestro equipo de colaboradores está aquí para ayudarte en todo momento y hacer que tu visita sea lo más placentera posible.

                    En Tienda ReGon, no solo nos preocupamos por ofrecerte productos excepcionales, sino que también valoramos tu tiempo y comodidad. Por eso, hemos diseñado un espacio acogedor y organizado para facilitar tus compras y brindarte una experiencia eficiente.

                    Agradecemos tu preferencia y confianza en Tienda ReGon. ¡Esperamos que disfrutes explorando nuestras ofertas y descubriendo todo lo que tenemos preparado para ti! Siempre estamos aquí para atenderte con una sonrisa y hacer de tu visita una experiencia única.

                    ¡Bienvenido a Tienda ReGon, donde la calidad y la atención se encuentran para hacer de tus compras algo extraordinario!</p>
            </div>
        </div>

    );
};

export default UserForm;