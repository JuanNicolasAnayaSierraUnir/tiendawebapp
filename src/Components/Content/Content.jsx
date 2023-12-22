import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Vista1 from '../../Page/Home/Home';
import Vista2 from '../../Page/Product/Products';
import Vista3 from '../../Page/Inventory/Inventory';
import Vista4 from '../../Page/Inventory/GridInventory';
import Vista5 from '../../Page/SocialMedia';
const Content = () => {
    return (
        <Routes>
            <Route path="/Home" exact Component={Vista1}/>
            <Route path="/Products" Component={Vista2}/>
            <Route path="/Inventory" Component={Vista3}/>
            <Route path="/GridInventory" Component={Vista4}/>
            <Route path="" Component={Vista5}  />
        </Routes>
    );
};

export default Content;