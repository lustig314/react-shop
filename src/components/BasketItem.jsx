import React from 'react';

const BasketItem = ({id, title, regularPrice, quantity, removeFromBasket = Function.prototype, incOrder = Function.prototype, decOrder = Function.prototype}) => {
  return (
    <li className="collection-item">
      {title} х{quantity} = {regularPrice * quantity} руб.
      <i className="material-icons dec-order" onClick={() => decOrder(id)}>remove</i>
      <i className="material-icons inc-order" onClick={() => incOrder(id)}>add</i>
      <span className="secondary-content" onClick={ () => removeFromBasket(id)}>
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
};

export default BasketItem;
