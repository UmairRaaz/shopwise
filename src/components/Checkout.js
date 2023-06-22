import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import CartContext from './CartContext';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router';
 
const Checkout = () => {
    const [form, setform] = useState({});
    const [addresses, setAddresses] = useState([]);
    const [toggleForm, setToggleForm] = useState(true)
    const [selectedAddressIndex, setSelectedAddressIndex] = useState(-1);
    const [selectedValue, setSelectedValue] = useState("John Doe, 1234567890, 101, 10, ABC Towers, XYZ Colony, Main Street, Exampleville,12345");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let navigate = useNavigate()
    const fillDummy = () => {
        setform({
            name: 'Jane Smith',
            mob: '9876543210',
            add1: '202, 20, XYZ Apartments',
            add2: 'ABC Colony, Park Avenue',
            city: 'Cityville',
            pin: '54321'
        });
    }
    const saveForm = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setform((prev) => ({ ...prev, [name]: value }));
        setAddresses((prevAddresses) => [...prevAddresses, form]);
        setToggleForm(!toggleForm)
    };
    const getFormattedAddress = (address) => {
        if (!address) {
            return "John Doe, 1234567890, 101, 10, ABC Towers, XYZ Colony, Main Street, Exampleville,12345"; // Return an empty string or any default value when the address is undefined
          }
        const { name, mob, add1, add2, city, pin } = address;
        return `${name} ${mob} ${add1} ${add2} ${city} ${pin}`;
    }
    const handleAddressSelection = (index) => {
        setSelectedAddressIndex(index);
        setSelectedValue(getFormattedAddress(addresses[index]))
    };

    const { cartItems, setCartItems, totalitem, setItem } = useContext(CartContext);
    let totalQuantity = 0;
    let totalPrice = 0;
    let totalDiscountedPrice = 0;

    cartItems.forEach((data) => {
        const quantity = totalitem[data.id] || 1;
        totalQuantity += quantity;
        totalPrice += quantity * data.price;
        totalDiscountedPrice += quantity * data.discPrice;
    });
    return (
        <div className="main">
            <div className="checkout-box">
                <div className="colom1">
                    <h3>Address</h3>
                    <div className="button-form">
                        {toggleForm ? (<Button onClick={() => setToggleForm(!toggleForm)} variant="dark">+ Add New Address</Button>) : (
                            <div className="form">
                                <Form >
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control name="name" value={form.name || ''} onChange={(e) => setform({ ...form, name: e.target.value })} type="text" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Mobile No.</Form.Label>
                                            <Form.Control name="mob" onChange={(e) => setform({ ...form, mobile: e.target.value })} value={form.mob || ''} type="number" />
                                        </Form.Group>
                                    </Row>

                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        <Form.Label>Flat, House no., Building</Form.Label>
                                        <Form.Control name="add1" onChange={(e) => setform({ ...form, add1: e.target.value })} value={form.add1 || ''} type="text" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGridAddress2">
                                        <Form.Label>Area, Colony, Street</Form.Label>
                                        <Form.Control name="add2" onChange={(e) => setform({ ...form, add2: e.target.value })} value={form.add2 || ''} type="text" />
                                    </Form.Group>

                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridCity">
                                            <Form.Label>Town/City</Form.Label>
                                            <Form.Control name="city" onChange={(e) => setform({ ...form, city: e.target.value })} value={form.city || ''} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>Pin Code</Form.Label>
                                            <Form.Control name="pin" onChange={(e) => setform({ ...form, pin: e.target.value })} value={form.pin || ''} type="number" />

                                        </Form.Group>
                                    </Row>

                                    <Form.Group className="mb-3" id="formGridCheckbox">
                                        <Button onClick={fillDummy} className='btns mb-1' variant="outline-dark" type="button">Fill Dummy Text</Button>
                                        <Button onClick={() => setToggleForm(!toggleForm)} className='btns' variant="outline-dark" type="button">Cancel</Button>
                                        <Button onClick={saveForm} className='btns' variant="dark" type="submit">Save</Button>
                                    </Form.Group>
                                </Form>
                            </div>
                        )}
                    </div>
                    <div className="addresses " >
                        <InputGroup style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                            <div key={-1} style={{ display: 'flex', alignItems: 'center', }}>
                                <InputGroup.Radio
                                    aria-label="Radio button for following text input"
                                    checked={selectedAddressIndex === -1}
                                    onChange={() => {handleAddressSelection(-1);}}
                                />
                                <Form.Control
                                    aria-label="Text input with radio button"
                                    value="John Doe, 1234567890, 101, 10, ABC Towers, XYZ Colony, Main Street, Exampleville,12345"
                                />
                            </div>
                            {addresses.map((address, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                    <InputGroup.Radio
                                        aria-label="Radio button for following text input"
                                        checked={selectedAddressIndex === index}
                                        onChange={() => handleAddressSelection(index)}
                                    />
                                    <Form.Control
                                        aria-label="Text input with radio button"
                                        value={getFormattedAddress(address)}
                                    />
                                    <br /> {/* Line break */}
                                </div>
                            ))}
                        </InputGroup>
                    </div>
                </div>
                <div className="colom2">
                    <div className="ch-heading">
                        <h3>Order Summary</h3>
                    </div>
                    <div className="ch-products">
                        {cartItems.map((data) => {
                            const quantity = totalitem[data.id] || 1;
                            return (
                                <div className="product">
                                    <div className="img"><img src={data.img} alt="" /></div>
                                    <div className="name-price">
                                        <h6>{data.name}</h6>
                                        <div className="prices">
                                            <p style={{ fontWeight: 'bolder' }}>${data.price}</p>
                                            <p style={{ textDecoration: 'line-through' }}>${data.discPrice}</p>
                                        </div>

                                    </div>
                                    <div className="qty">
                                        <h6>x{quantity}</h6>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="break"></div>
                    <div className="finalBill">
                        <div className="bills">
                            <p>Total Products</p><h6>{totalQuantity}</h6>
                        </div>
                        <div className="bills">
                            <p>Subtotal</p><h6>${totalPrice}</h6>
                        </div>
                        <div className="bills">
                            <p>Discount</p><h6>-${totalDiscountedPrice}</h6>
                        </div>
                        <div className="bills">
                            <p>Delivery Charges</p><h6>Free</h6>
                        </div>
                        <div className="break"></div>
                        <div className="bills total">
                            <p>Total</p><h6>${totalPrice - totalDiscountedPrice}</h6>
                        </div>
                    </div>

                    <Button variant="dark" onClick={handleShow}>Place Order</Button>

                    <div className="modal">
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Order Summary</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='colom2'>
                                <div className="address">
                                    <h6>Adreess</h6>
                                <p>{selectedValue}</p>
                                </div>
                                <div className="finalBill">
                                    <div className="bills">
                                        <p>Total Products</p><h6>{totalQuantity}</h6>
                                    </div>
                                    <div className="bills">
                                        <p>Subtotal</p><h6>${totalPrice}</h6>
                                    </div>
                                    <div className="bills">
                                        <p>Discount</p><h6>-${totalDiscountedPrice}</h6>
                                    </div>
                                    <div className="bills">
                                        <p>Delivery Charges</p><h6>Free</h6>
                                    </div>
                                    <div className="break"></div>
                                    <div className="bills total">
                                        <p>Total</p><h6>${totalPrice - totalDiscountedPrice}</h6>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="dark" onClick={()=> navigate('/Thankyou')} >
                                    Comfirm Order
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout