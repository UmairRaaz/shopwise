import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CartContext from './CartContext';
const Filter = (props) => {
    const { checkedInputs, setCheckedInputs, selectedOption, setSelectedOption, value, setValue } = useContext(CartContext);
    const handleInputChange = (inputValue) => {
        if (checkedInputs.includes(inputValue)) {
            setCheckedInputs(checkedInputs.filter((input) => input !== inputValue));
        } else {
            setCheckedInputs([...checkedInputs, inputValue]);
        }
    };
    const handleOptionChange = (optionValue) => {
        setSelectedOption(optionValue);
    };
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className={`filter-main ${props.style ? 'show' : ''}`}
            style={{
                opacity: props.style ? '1' : '0',
                transition: 'opacity 0.3s ease-in-out, width 0.1s linear'
            }}>
            <div className="fheading">
                <h3>Filter Products</h3>
                <FontAwesomeIcon icon={faX} onClick={() => props.closeFilter(false)} style={{ cursor: 'pointer' }} />
            </div>
            <div className="gender">
                <h4>Gender</h4>
                <Button variant="outline-dark" onClick={() => props.setGender("Men")}>Male</Button>{' '}
                <Button variant="outline-dark" onClick={() => props.setGender("Women")}>Female</Button>{' '}
            </div>
            <div className="price-range">
                <h4>Price Range</h4>
                <Form>
                    <Form.Group controlId="rangeSlider">
                        <Form.Label>Range Slider</Form.Label>
                        <Form.Control
                            type="range"
                            min={15}
                            max={40}
                            step={1}
                            value={value}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                appearance: 'none',
                                height: '8px',
                                borderRadius: '5px',
                                background: '#636e72',
                                outline: 'none',
                                border: 'none',
                                opacity: '1',
                                transition: 'opacity 0.2s',
                            }}
                            className="slider"
                        />
                    </Form.Group>


                    <p>Selected Value: ${value}</p>
                </Form>
            </div>
            <div className="categories">
                <h4>Categories</h4>
                <Form>
                    <div key="casualwear" className="mb-3">
                        <Form.Check
                            type="checkbox"
                            id="casualwear"
                            label="Casualwear"
                            checked={checkedInputs.includes('Casualwear')}
                            onChange={() => handleInputChange('Casualwear')}
                        />
                    </div>
                    <div key="formalwear" className="mb-3">
                        <Form.Check
                            type="checkbox"
                            id="formalwear"
                            label="Formalwear"
                            checked={checkedInputs.includes('Formalwear')}
                            onChange={() => handleInputChange('Formalwear')}
                        />
                    </div>
                    <div key="luxury" className="mb-3">
                        <Form.Check
                            type="checkbox"
                            id="luxury"
                            label="Luxury"
                            checked={checkedInputs.includes('Luxury')}
                            onChange={() => handleInputChange('Luxury')}
                        />
                    </div>
                </Form>
            </div>
            <div className="rating">
                <h4>Rating</h4>
                <Form>
                    <div key="onestar" className="mb-3">
                        <Form.Check
                            type="radio"
                            id="onestar"
                            name="rating"
                            label="1 Stars & above"
                            checked={selectedOption === '1Star'}
                            onChange={() => handleOptionChange(1)}
                        />
                    </div>
                    <div key="twostar" className="mb-3">
                        <Form.Check
                            type="radio"
                            id="twostar"
                            name="rating"
                            label="2 Stars & above"
                            checked={selectedOption === '2Star'}
                            onChange={() => handleOptionChange(2)}
                        />
                    </div>
                    <div key="threestar" className="mb-3">
                        <Form.Check
                            type="radio"
                            id="threestar"
                            name="rating"
                            label="3 Stars & above"
                            checked={selectedOption === '3Star'}
                            onChange={() => handleOptionChange(3)}
                        />
                    </div>
                    <div key="fourstar" className="mb-3">
                        <Form.Check
                            type="radio"
                            id="threestar"
                            name="rating"
                            label="4 Stars & above"
                            checked={selectedOption === '4Star'}
                            onChange={() => handleOptionChange(4)}
                        />
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Filter