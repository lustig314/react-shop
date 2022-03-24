import React from 'react';

const Cart = ({quantity = 0, handleBasketShow = Function.prototype}) => {
  return (
    <div className='cart yellow accent-2' onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  );
};

export default Cart;
