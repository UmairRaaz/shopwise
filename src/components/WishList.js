import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import CartContext from './CartContext';
import EmptyWish from './EmptyWish';
import { useNavigate } from 'react-router-dom';
const WishList = () => {
    const navigate = useNavigate();
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
    if (wishListItems.length === 0) {
        return <EmptyWish />;
      }
    return (
        <Container>
            <Row>
                {wishListItems.map((data) => {
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
                                            <Button variant="primary" onClick={() => addToCart(data)}>Add to Cart</Button>
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
    )
}

export default WishList