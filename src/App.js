import React, { useState, useEffect } from 'react';
import './App.css';
import MainApp from './components/MainApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from './components/CartContext';
function App() {
  const [cartItems, setCartItems] = useState([])
  const [wishListItems, setWishListItems] = useState([])
  const [totalitem, setItem] = useState({})
  const [checkedInputs, setCheckedInputs] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [value, setValue] = useState(0);
  const [product, setProduct] = useState([])
  useEffect(() => {
    fetch('/api/products')
        .then((res) => res.json())
        .then((data) => setProduct(data.products))
        .catch(err => console.log(err))
}, [])
  return (
    <div className="App">
      <CartContext.Provider value={{ cartItems, setCartItems, wishListItems, setWishListItems, totalitem, setItem, checkedInputs, setCheckedInputs, selectedOption, setSelectedOption, value, setValue, product, setProduct }}>
        <MainApp />
      </CartContext.Provider>
    </div>
  );
}

export default App;
