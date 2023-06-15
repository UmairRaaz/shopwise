import React, { useState } from 'react';
import './App.css';
import MainApp from './components/MainApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from './components/CartContext';
function App() {
  const [cartItems, setCartItems] = useState([])
  const [wishListItems, setWishListItems] = useState([])
  return (
    <div className="App">
      <CartContext.Provider value={{ cartItems, setCartItems, wishListItems, setWishListItems }}>
        <MainApp />
      </CartContext.Provider>
    </div>
  );
}

export default App;