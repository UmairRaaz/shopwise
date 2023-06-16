import React from 'react';
import NavbarComponent from './NavbarComponent';
import Products from './Products';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewProduct from './ViewProduct';
import Home from './Home';
import CartPage from './CartPage';
import WishList from './WishList';
import Checkout from './Checkout';

const MainApp = () => {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path='/Products' element={<Products />}></Route>
          <Route path='/ViewProduct/:id' element={<ViewProduct />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/CartPage' element={<CartPage />}></Route>
          <Route path='/WishList' element={<WishList />}></Route>
          <Route path='/Checkout' element={<Checkout />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default MainApp