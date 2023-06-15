import React, { useEffect, useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import CartContext from './CartContext';
const Products = () => {
    const [product, setProduct] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        fetch('/api/products')
            .then((res) => res.json())
            .then((data) => setProduct(data.products))
            .catch(err => console.log(err))
    }, [])

    const viewProduct = (id) => {
        navigate(`/ViewProduct/${id}`);
    }
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
        <>
            <Container>
                <Row>
                    {product.map((data) => {
                        const isInWishlist = wishListItems.some((item) => item.id === data.id);
                        const isInCart = cartItems.some((item) => item.id === data.id);
                        return (
                            <Col md={4} key={data.id}>
                                <Card style={{ marginBottom: '20px' }}>
                                    <Card.Img variant="top" src={data.img} onClick={() => viewProduct(data.id)} />
                                    <Card.Body>
                                        <div className='d-flex justify-content-between'>
                                            <div className='productName' >
                                                <Card.Title>{data.name}</Card.Title>
                                                <div className="d-flex gap-1 ">
                                                    <p>{(Math.random() * 2 + 3).toFixed(1)}</p>
                                                    <FontAwesomeIcon icon={faStar} style={{ color: 'yellow', marginTop: "3px" }} />
                                                    <p>Rating</p>
                                                </div>
                                            </div>
                                            <div className='productPrice'>
                                                <Card.Title>${data.discPrice}</Card.Title>
                                                <div style={{ textDecoration: "line-through" }}>${data.price}</div>
                                            </div>
                                        </div>
                                        <div style={{ backgroundColor: '#eaeae8', width: '100%', height: "1px", marginBottom: "10px" }}></div>
                                        <div className="d-flex justify-content-between">

                                            {isInCart ? (
                                                <Button variant='secondary' onClick={() => goToBag(data.id)} > Go to Bag</Button>
                                            ) : (
                                                <Button variant='primary' onClick={() => addToCart(data)} >Add To Cart</Button>
                                            )}

                                            {isInWishlist ? (
                                                <Button variant='primary' onClick={() => removeFromWish(data.id)} > <FontAwesomeIcon icon={faHeart} /></Button>
                                            ) : (
                                                <Button variant='secondary' onClick={() => addToWish(data)} > <FontAwesomeIcon icon={faHeart} /></Button>
                                            )}

                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default Products