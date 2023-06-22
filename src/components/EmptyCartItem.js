import React from 'react';
import emptycart from '../products/emptycart.jpg'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

const EmptyCartItem = () => {
  let navigate = useNavigate()
  return (
    <div className='empty'>
      <div className="emptycontent">
        <div className="image">
          <img src={emptycart} alt="" />
        </div>
        <div className="text-btn">
          <h3>Your Cart is Empty</h3>
          <h6>Add Something to make me happy </h6>
          <Button variant="primary" onClick={()=> navigate('/Products')}>Continue Shopping</Button>
        </div>

      </div>

    </div>
  )
}

export default EmptyCartItem