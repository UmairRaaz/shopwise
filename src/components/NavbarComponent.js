import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link} from 'react-router-dom';
import CartContext from './CartContext';

const NavbarComponent = () => {
    const {cartItems, wishListItems} = useContext(CartContext)
    console.log(wishListItems)
    return (
        <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to="/home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/Products">Products</Nav.Link>
                            <div className="cart">
                            <Nav.Link as={Link} to="/CartPage"><FontAwesomeIcon icon={faCartShopping} className='cartIcon' /></Nav.Link>
                            <p className='numItems'>{cartItems.length}</p>
                            </div>
                            <div className="cart">
                            <Nav.Link as={Link} to="/WishList"><FontAwesomeIcon icon={faHeart} className='cartIcon' /></Nav.Link>
                            <p className='numItems'>{wishListItems.length}</p>
                            </div>
       
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
  
        </div>
    )
}

export default NavbarComponent