import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import homeImage from '../products/home.jpg';
import CartContext from './CartContext';
import c1 from '../products/c1.jpg';
import c2 from '../products/c2.jpg';
import c3 from '../products/c3.jpg';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const {product} = useContext(CartContext);
  const navigate = useNavigate();
  const viewProduct = (id) => {
    navigate(`/ViewProduct/${id}`);
}
  return (
    <div className='main'>
      <div className="hero-section">
        <div className="heading">
          <h1>Discover  <br /> Your Style</h1>
          <p> Experience the finest quality and craftsmanship with our wide selection of premium shirt fabrics. .</p>
          <Button className='btns' variant="dark">Start Shopping</Button>
          <Button className='btns' variant="outline-dark">Explore More <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Button>
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
          {product.slice(10, 13).map((data) => {
            return (
              <div className="product">
                <div className="pimage"  onClick={() => viewProduct(data.id)}>
                  <img src={data.img} alt="" />
                  <button className="pbtn btn btn-info">View Product</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="category">
        <div className="heading">
          <h2>Categories</h2>
        </div>
        <div className="boxs">
          <div className="pbox" onClick={()=>(navigate('/products'))}>
            <img src={c1} alt="" />
            <h1>Bags</h1>
          </div>
          <div className="pbox" onClick={()=>(navigate('/products'))}>
            <img src={c2} alt="" />
            <h1>Shoes</h1>
          </div>
          <div className="pbox" onClick={()=>(navigate('/products'))}>
            <img src={c3} alt="" />
            <h1>Glasses </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home