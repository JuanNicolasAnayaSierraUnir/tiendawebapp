// src/components/ProductForm.js
import React, {useState} from 'react';
import Input from "../../Components/General/Input/Input";
import Textarea from "../../Components/General/Textarea/Textarea";
import File from "../../Components/General/Files/File";

const Inventory = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        quantity: '',
        price: '',
        image: '',
    });
    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
            [e.target.description]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Producto guardado:', product);
    };

    const handleClear = () => {
        // Limpia el formulario
        setProduct({
            name: '',
            description: '',
            quantity: '',
            price: '',
            image: '',
        });
    };

    return (

        <div className="card">
            <div className="card-header text-center">
                Agregar Producto al Inventario
            </div>
            <div className="card-body ">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <h5 className="card-title text-center">Agregar Producto al Inventario</h5>
                            <form onSubmit={handleSubmit}>
                                <Input id={"Nombre"} type={"text"} label={"Nombre del Producto"}
                                       placeholder={"Nombre del Producto"} onChange={handleChange}
                                       value={product.name}></Input>
                                <Textarea id={"Descripción"} rows={"3"} label={"Descripción del Producto"}
                                          placeholder={"Descripción del Producto"} onChange={handleChange}
                                          value={product.description}></Textarea>
                                <Input id={"Cantidad"} type={"number"} label={"Cantidad"} placeholder={"Cantidad"}
                                       onChange={handleChange} value={product.quantity}></Input>
                                <Input id={"price"} type={"number"} label={"Precio Unitario"}
                                       placeholder={"Precio Unitario"} onChange={handleChange}
                                       value={product.price}></Input>
                                <File id={"name"} label={"Imagen del Producto"} onChange={handleChange}
                                      value={product.image}></File>

                                <button type="submit" className="btn btn-primary me-2">
                                    Guardar
                                </button>
                                <button type="button" className="btn btn-secondary" onClick={handleClear}>
                                    Limpiar Formulario
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Inventory;
