import React from 'react';

const SocialMediaFrame = () => (
    <div className="row justify-content-center text-center">
        <div style={{ marginTop: '20px' }}>
            <h3>Bienvenido a nuestras redes sociales</h3>
            <p>Aquí encontrarás las últimas actualizaciones y noticias emocionantes.</p>
        </div>

        <div className="col-12">
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=500&height=550&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="500"
                height="550"
                allowFullScreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">

            </iframe>

        </div>

    </div>
);

export default SocialMediaFrame;
