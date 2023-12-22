// src/components/ProductTable.js
import React, {useState} from 'react';
import Item from "../../Models/ProductModel";
import carousel1 from "../../Image/Carrusel1.jpg";
import carousel3 from "../../Image/Carrusel3.jpg";

const ProductTable = () => {

    const [itemsData, setItemsData] = useState([
        new Item(1, 'Elemento 1', carousel1, 30, 5000, 1000),
        new Item(2, 'Elemento 2', carousel3, 40, 3500, 2500),
        new Item(3, 'Elemento 3', carousel1, 2350, 1300, 1200),
        new Item(4, 'Elemento 4', carousel3, 2350, 1300, 1200),
        new Item(5, 'Elemento 5', carousel1, 2350, 1300, 1200),
        new Item(6, 'Elemento 6', carousel3, 2350, 1300, 1200)
        // Agrega más elementos según sea necesario
    ]);

    const handleDelete = (index) => {
        const updatedList = [...itemsData];
        updatedList.splice(index, 1);
        setItemsData(updatedList);
    };

    return (
        <div className="card">
            <div className="card-header text-center">
                Lista de Productos
            </div>
            <div className="card-body text-center align-content-center">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div>
                                <h5 className="mt-4">Lista de Productos</h5>
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Precio Unitario</th>
                                        <th scope="col">Imagen</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {itemsData.map((product, index) => (
                                        <tr key={index}>
                                            <td>{product.name}</td>
                                            <td>{product.amount}</td>
                                            <td>{product.value}</td>
                                            <td>{product.unitPrice}</td>
                                            <td>
                                                <img src={product.imagen} alt={product.name} style={{ width: '50px', height: '50px' }} />
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-danger" onClick={() => handleDelete(index)}>
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductTable;
