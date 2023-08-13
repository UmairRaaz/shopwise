import React from 'react';
import NavbarComponent from './NavbarComponent';
import Products from './Products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewProduct from './ViewProduct';
import Home from './Home';
import CartPage from './CartPage';
import WishList from './WishList';
import Checkout from './Checkout';
import Filter from './Filter';
import Thankyou from './Thankyou';
import EmptyCartItem from './EmptyCartItem';
import EmptyWish from './EmptyWish';
import Footer from './Footer';
const MainApp = () => {
  return (
    <>
      <Router>
        <NavbarComponent />
        <div className="main-content">
          <Routes>
            <Route path='/Products' element={<Products />} />
            <Route path='/ViewProduct/:id' element={<ViewProduct />} />
            <Route path='/' element={<Home />} />
            <Route path='/CartPage' element={<CartPage />} />
            <Route path='/WishList' element={<WishList />} />
            <Route path='/Checkout' element={<Checkout />} />
            <Route path='/Filter' element={<Filter />} />
            <Route path='/Thankyou' element={<Thankyou />} />
            <Route path='/EmptyWish' element={<EmptyWish />} />
            <Route path='/EmptyCartItem' element={<EmptyCartItem />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default MainApp;
