import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
const Checkout = () => {
    const [form, setform] = useState({});
    const [addresses, setAddresses] = useState([]);
    const fillDummy = () =>  {
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
      };
   
    return (
        <div className="main">
            <div className="checkout-box">
                <div className="colom1">
                    <h3>Address</h3>
                    <div className="button-form">
                        {/* <Button variant="dark">+ Add New Address</Button> */}
                        <div className="form">
                            <Form >
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control name="name" value={form.name || ''} onChange={(e) => setform({ ...form, name: e.target.value })} type="text" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Mobile No.</Form.Label>
                                        <Form.Control name="mob" onChange={(e) => setform({ ...form, mobile: e.target.value })}  value={form.mob || ''} type="number" />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Flat, House no., Building</Form.Label>
                                    <Form.Control name="add1" onChange={(e) => setform({ ...form, add1: e.target.value })}  value={form.add1 || ''}  type="text" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridAddress2">
                                    <Form.Label>Area, Colony, Street</Form.Label>
                                    <Form.Control name="add2" onChange={(e) => setform({ ...form, add2: e.target.value })}  value={form.add2 || ''} type="text" />
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Town/City</Form.Label>
                                        <Form.Control name="city" onChange={(e) => setform({ ...form, city: e.target.value })} value={form.city || ''}  />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Pin Code</Form.Label>
                                        <Form.Control name="pin" onChange={(e) => setform({ ...form, pin: e.target.value })}  value={form.pin || ''}type="number" />

                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Button onClick={fillDummy} className='btns' variant="outline-dark" type="button">Fill Dummy Text</Button>
                                    <Button  className='btns' variant="outline-dark" type="button">Cancel</Button>
                                    <Button onClick={saveForm} className='btns' variant="dark" type="submit">Save</Button>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                    <div className="addresses">
                        <InputGroup>
                            <InputGroup.Radio  aria-label="Radio button for following text input" />
                            <Form.Control  aria-label="Text input with radio button" value="John Doe, 1234567890, 101, 10, ABC Towers, XYZ Colony, Main Street, Exampleville,12345" />
                        </InputGroup>
                    </div>
                </div>
                <div className="colom2"></div>
            </div>
        </div>
    )
}

export default Checkout