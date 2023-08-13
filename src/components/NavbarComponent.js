import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import CartContext from './CartContext';
import Button from 'react-bootstrap/Button';
const NavbarComponent = () => {
    const { cartItems, wishListItems } = useContext(CartContext);
    let navigate = useNavigate()
    return (
        <div>
            <Navbar bg="light" expand="lg" className="navbar fixed-top" style={{
                boxShadow: "0 4px 30px rgba(0, 0, 0, .1)", zIndex: '10'
            }}>
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">ShopWise</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <div className="cart" style={{ marginTop: '10px' }}>
                                <Nav.Link as={Link} to="/CartPage">
                                    <FontAwesomeIcon icon={faCartShopping} className='cartIcon' />
                                </Nav.Link>
                                {cartItems.length !== 0 && <p className='numItems'>{cartItems.length}</p>}
                            </div>
                            <div className="cart" style={{ marginRight: '30px', marginTop: '10px' }}>
                                <Nav.Link as={Link} to="/WishList">
                                    <FontAwesomeIcon icon={faHeart} className='cartIcon' />
                                </Nav.Link>
                                {wishListItems.length !== 0 && <p className='numItems'>{wishListItems.length}</p>}

                            </div>
                            <Button variant="success" size="sm" style={{ height: "30px", marginTop: '13px' }} onClick={() => navigate('/Products')}>
                                Explore
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    )
}

export default NavbarComponent