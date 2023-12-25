import React, {useEffect, useState} from 'react';
import Item from '../../Models/ProductModel'; // Importa el modelo
import carousel1 from "../../Image/Carrusel1.jpg"
import carousel3 from "../../Image/Carrusel3.jpg"
import GroupButton from "../General/GroupButton/GroupButton";
import useCounter from "../../Custom";
const Product = ({ images }) => {

    const itemsData = [
        new Item(1, 'Elemento 1',carousel1,30,5000,1000),
        new Item(2, 'Elemento 2',carousel3,40,3500,2500),
        new Item(3, 'Elemento 3',carousel1,2350,1300,1200),
        new Item(4, 'Elemento 3',carousel3,2350,1300,1200),
        new Item(5, 'Elemento 3',carousel1,2350,1300,1200),
        new Item(6, 'Elemento 3',carousel3,2350,1300,1200)
    ];

    useEffect(() => {
        console.log('El componente Product se montó');

        // Puedes realizar operaciones adicionales aquí si es necesario
        return () => {
            console.log('El componente Product se desmontó');
        };
    }, []);

    return (

        itemsData.map((Item) => (
            <div className="col-3">
            <div className="card mt-3">
                <img src={Item.imagen} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Nombre Producto: {Item.name}</h5>
                    <div>
                        <label><b>Valor:</b> ${Item.value}</label>
                    </div>
                    <div>
                        <label><b>Cantidad:</b> {Item.amount}</label>
                    </div>
                    <div>
                        <label><b>Precio Unitario:</b> ${Item.unitPrice}</label>
                    </div>
                    <div className="mt-3">
                    <GroupButton initialValue={Item.amount}></GroupButton>
                    </div>

                </div>
            </div>
            </div>
        ))



    );
};
export default Product;