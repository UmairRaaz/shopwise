import React, { useEffect, useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import CartContext from './CartContext';
import Filter from './Filter';
import banner from '../products/banner2.png'
const Products = () => {
    const [product, setProduct] = useState([])
    const [showFilter, setShowFilter] = useState(false);
    const [genderFilter, setGenderFilter] = useState('all');
    const [sortByPrice, setSortByPrice] = useState(false);
    const [sortOption, setSortOption] = useState('mix');
    const [sortedProducts, setSortedProducts] = useState([...product]);


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
    const { cartItems, setCartItems, wishListItems, setWishListItems, checkedInputs, selectedOption, value } = useContext(CartContext);

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
    let closeFilter = (x) => {
        setShowFilter(x)
    }

    const handleSortByOption = (option) => {
        let sorted = [...product];

        if (option === 'lowToHigh') {
            sorted.sort((a, b) => a.price - b.price); // Sort products by price from low to high
        }
        else if (option === 'highToLow') {
            sorted.sort((a, b) => b.price - a.price); // Sort products by price from high to low
        }
        setSortedProducts(sorted);
        setSortOption(option); // Update the selected sort option
    };
    useEffect(() => {
        handleSortByOption(sortOption);
      }, []);
    // Applying Filters 
    const filteredAndSortedProducts = sortedProducts.filter((product) => {
        if (sortByPrice) { }
        // Gender filter
        if (genderFilter !== 'all' && product.gender !== genderFilter) {
            return false;
        }
        if (checkedInputs.length > 0 && !checkedInputs.includes(product.category)) {
            return false;
        }
        if (selectedOption !== 0 && product.rating < selectedOption) {
            return false;
        }
        if (value !== 0 && product.discPrice > value) {
            return false;
        }
        // Default condition to show all items
        return true;
    });
    const handleGenderFilter = (gender) => {
        setGenderFilter(gender);
    };


    return (
        <div className='main'>
            <Filter style={showFilter} closeFilter={() => closeFilter()} setGender={handleGenderFilter} />
            <div className="hero-image w-100 h-80 border border-dark" style={{ height: "35vh" }}>
                <img src={banner} style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="heading-filter">
                <div className="heading">
                    <h3>Shirts For You!</h3>
                </div>
                <div className="filter">
                    <Dropdown size="sm">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Sort By Price
                        </Dropdown.Toggle>

                        <Dropdown.Menu >
                            <Dropdown.Item href="#/action-1"onClick={() => handleSortByOption('mix')}>Sort By Price</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" onClick={() => handleSortByOption('lowToHigh')} >Low to High</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" onClick={() => handleSortByOption('highToLow')}>High to Low</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Button variant="dark" size="sm" className="btn-sm" onClick={() => setShowFilter(!showFilter)}>
                        Filters
                    </Button>
                </div>
            </div>
            <Container>
                <Row>
                    {filteredAndSortedProducts.map((data) => {
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
                                                    <p>{data.rating}</p>
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
        </div>
    )
}

export default Products