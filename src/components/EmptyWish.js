import React from 'react';
import emptywish from '../products/emptywish.jpg'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
const EmptyWish = () => {
  let navigate = useNavigate()
  return (
    <div className='empty'>
      <div className="emptycontent">
        <div className="image">
          <img src={emptywish} alt="" />
        </div>
        <div className="text-btn">
          <h3>There is nothing to show</h3>
          <h6>Add Something to make me happy </h6>
          <Button variant="primary" onClick={()=> navigate('/Products')}>Continue Shopping</Button>
        </div>

      </div>

    </div>
  )
}

export default EmptyWish