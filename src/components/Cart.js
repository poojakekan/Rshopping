import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../redux/cartSlice';

const Cart = () => {
  const isVisible = useSelector((state) => state.cart.isVisible);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(toggleCart())}>
        {isVisible ? 'Hide Cart' : 'Show Cart'}
      </button>
      {isVisible && <div>Your cart items go here...</div>}
    </div>
  );
};

export default Cart;
   