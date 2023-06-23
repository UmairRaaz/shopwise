import React, { useContext, useEffect, useState } from 'react'
import CartContext from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faHeart } from '@fortawesome/free-solid-svg-icons';
import EmptyCartItem from './EmptyCartItem';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
const CartPage = () => {
  const { cartItems, setCartItems, wishListItems, setWishListItems, totalitem, setItem } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0)
  let navigate = useNavigate()
  useEffect(() => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      const quantity = totalitem[item.id] || 1;
      const price = parseFloat(item.discPrice);
      totalPrice += quantity * price;
    });
    setTotalPrice(totalPrice);
  }, [cartItems, totalitem]);



  const addToWish = (data) => {
    const updateWishItems = [...wishListItems, data];
    setWishListItems(updateWishItems);
  }
  const removeFromWish = (id) => {
    const updatedWishlistItems = wishListItems.filter((item) => item.id !== id);
    setWishListItems(updatedWishlistItems);
  };
  const removeFromCart = (id) => {
    const updatedWishlistItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedWishlistItems);
  };
  const addItem = (id) => {
    setItem((prevItems) => ({
      ...prevItems,
      [id]: (prevItems[id] || 1) + 1
    }));
  }
  const minusItem = (id) => {
    setItem((prevItems) => {
      const updatedValue = (prevItems[id] || 1) - 1;
      if (updatedValue === 0) {
        removeFromCart(id);
      }
      return {
        ...prevItems,
        [id]: updatedValue
      };
    });
  };
  if (cartItems.length === 0) {
    return <EmptyCartItem />;
  }
  return (
    <>
      <div>
        <div className='main'>
          <div className="heading">
            <h3>Bag</h3>
          </div>
          <div className="bag-price">
            <div className="bagItems-column">
              {cartItems.map((data) => {
                console.log(totalitem[data.id])
                const isInWishlist = wishListItems.some((item) => item.id === data.id);
                return (
                  <div className="bagItems" key={data.id}>
                    <div className="cart-image">
                      <img src={data.img} alt="Product" />
                    </div>
                    <div className="name-qty-btns">
                      <h5>{data.name}</h5>
                      <div className="qty">
                        <p>
                          Quantity:
                          <FontAwesomeIcon onClick={() => addItem(data.id)} icon={faPlus} className='qty-btn' />
                          <input style={{textAlign: 'center'}} type="text" value={totalitem[data.id] || 1} className='qty-input' readOnly />
                          <FontAwesomeIcon onClick={() => minusItem(data.id)} className='qty-btn' icon={faMinus} />
                        </p>
                      </div>
                      <div className="btns">
                        <Button onClick={() => removeFromCart(data.id)} variant='primary' className='btn-addCart btn-sm'>Remove From Bag</Button>
                        {isInWishlist ? (
                          <Button variant='primary' onClick={() => removeFromWish(data.id)} className='btn-sm d-sm-inline-flex'>
                            <FontAwesomeIcon icon={faHeart} />
                          </Button>
                        ) : (
                          <Button variant='secondary' onClick={() => addToWish(data)} className='btn-sm d-sm-inline-flex'>
                            <FontAwesomeIcon icon={faHeart} />
                          </Button>
                        )}
                      </div>

                    </div>
                    <div className="price">
                      <h5>{data.discPrice}</h5>
                      <p style={{ textDecoration: "line-through" }}>{data.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="totalBill-column">
              <div className="totalBill">
                <div className="totalBillBox">
                  <h3>Price Details</h3>
                  <div>
                    {cartItems.map((item) => (
                      <div className="item" key={item.id}>
                        <h6>{`${item.name} ${totalitem[item.id] || 1}`}</h6>
                        <h6>{parseFloat(totalitem[item.id] || 1) * parseFloat(item.discPrice)}</h6>
                      </div>
                    ))}
                  </div>

                  <div className='break'></div>
                  <div className="total">
                    <h4>Total</h4>
                    <p>{totalPrice}</p>
                  </div>
                  <div className="checkout-Btn">
                    <Button variant="dark" onClick={() => navigate('/Checkout')}>Proceed to Checkout</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default CartPage