import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import CartContext from './CartContext';
const ViewProduct = () => {

    const [product, setProduct] = useState([])
    const { id } = useParams();
    const customerId = parseInt(id, 10);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('/api/products')
            .then((res) => res.json())
            .then((data) => setProduct(data.products))
            .catch(err => console.log(err))
    }, [])

    const customerProduct = product.filter((x) => x.id === customerId)
    const { cartItems, setCartItems, wishListItems, setWishListItems } = useContext(CartContext);
    const addToCart = (data) => {
        const updateCartItems = [...cartItems, data];
        setCartItems(updateCartItems)
    }
    const goToBag = () => {
        navigate(`/CartPage`);
    }
    const addToWish = (data) => {
        const updateWishItems = [...wishListItems, data];
        setWishListItems(updateWishItems);
    }
    const removeFromWish = (id) => {
        const updatedWishlistItems = wishListItems.filter((item) => item.id !== id);
        setWishListItems(updatedWishlistItems);
    };
    return (
        <div>
            <div className="box">
                {customerProduct.map((data) => {
                    const isInWishlist = wishListItems.some((item) => item.id === data.id);
                    const isInCart = cartItems.some((item) => item.id === data.id);
                    return (
                        <div key={data.id} className="product">
                            <div className="image">
                                <img src={data.img} alt="" />
                            </div>
                            <div className="details">
                                <h2>{data.name}</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, doloremque?</p>
                                <h4>Price: {data.discPrice}</h4>
                                <div className="d-flex justify-content-between">
                                    {isInCart ? (
                                        <Button variant='secondary' onClick={() => goToBag(data.id)}>Go to Bag</Button>
                                    ) : (
                                        <Button variant="primary" onClick={() => addToCart(data)}>Add to Cart</Button>
                                    )}

                                    {isInWishlist ? (
                                        <Button variant='primary' onClick={() => removeFromWish(data.id)}><FontAwesomeIcon icon={faHeart} /></Button>
                                    ) : (
                                        <Button variant='secondary' onClick={() => addToWish(data)}><FontAwesomeIcon icon={faHeart} /></Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}


            </div>


        </div>
    )
}

export default ViewProduct