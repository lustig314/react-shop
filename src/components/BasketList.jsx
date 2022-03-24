import React from 'react';
import BasketItem from './BasketItem';

const BasketList = ({
                      order = [],
                      handleBasketShow = Function.prototype,
                      removeFromBasket = Function.prototype,
                      incOrder = Function.prototype,
                      decOrder = Function.prototype
                    }) => {

  const totalPrice = order.reduce((sum, el) => sum + el.regularPrice * el.quantity, 0)

  return (
    <ul className="collection basket-list z-depth-5">
      <li className="collection-item active">Корзина</li>
      {
        order.length ? order.map(el =>
            <BasketItem
              key={el.id}
              {...el}
              removeFromBasket={removeFromBasket}
              incOrder={incOrder}
              decOrder={decOrder}
            />) :
          <li className="collection-item">Корзина пуста</li>
      }
      <li
        className="collection-item active">Общая стоимость: {totalPrice} руб.
      </li>
      <li className="collection-item">
        <button className="btn btn-small">Оформить</button>
      </li>

      <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
    </ul>
  );
};

export default BasketList;
