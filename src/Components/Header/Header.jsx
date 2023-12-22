import React from 'react';
import './Header.css';
import '../Sidebar/Sidebar.css';

const Header = () => {

    return (
        <header className="text-white text-center">
            <div className="overlay">
                <div className="row">
                    <div className="col-12">
                        <h1>Tienda WEB APP</h1>
                        <h3>Tienda especializada en productos de la canasta familiar</h3>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

