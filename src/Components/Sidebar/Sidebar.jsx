import React from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css'
import users from "../../Image/users.png";
import UsersInfo from "../General/UsersInfo/UsersInfo";

const Sidebar = () => {
    return (
        <div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header text-center">
                    <h3>Tienda ReGon</h3>
                    <UsersInfo src={users} alt={"Usuario"} name={"Nicolas Anaya"} cel={"320-884-2514"}></UsersInfo>
                </div>
                <ul className="list-unstyled components">
                    <li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href=""> <Link to="/">Noticias</Link></a>
                        <a href="Home"> <Link to="/Home">Inicio</Link></a>
                        <a href="Products"> <Link to="/Products">Productos</Link></a>
                        <a href="Inventory"> <Link to="/Inventory">Inventario</Link></a>
                        <a href="GridInventory"> <Link to="/GridInventory">Lista inventario</Link></a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Sidebar;