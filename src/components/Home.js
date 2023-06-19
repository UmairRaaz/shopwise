import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import homeImage from '../products/home.jpg';
import testImage from '../products/n8.jpg'

const Home = () => {
  return (
    <div className='main'>
      <div className="hero-section">
        <div className="heading">
          <h1>Discover  <br /> Your Style</h1>
          <p> Experience the finest quality and craftsmanship with our wide selection of premium shirt fabrics. .</p>
          <Button className='btns' variant="dark">Start Shopping</Button>
          <Button className='btns'variant="outline-dark">Explore More <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Button>
        </div>
        <div className="picture">
          <img src={homeImage} alt="" />
        </div>
      </div>
      <div className="trending">
        <div className="text">
          <h1>Trending Products</h1>
        </div>
        <div className="products">
          <div className="name-price">
            <h4>Name</h4>
            <div className="price-type">
            <h6>$40</h6>
            </div>
          </div>
          <div className="image">
            <img src={testImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home