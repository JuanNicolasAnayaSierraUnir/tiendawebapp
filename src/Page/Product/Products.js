import React from 'react';
import Product from "../../Components/Product/Product";

const Products = () => {
    return (
        <div className="card">
            <div className="card-header text-center">
                Productos
            </div>
            <div className="card-body text-center align-content-center">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <Product></Product>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Products;