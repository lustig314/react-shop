import React from 'react';
import Good from './Good'

// eslint-disable-next-line no-undef
const GoodsList = ({goods= [], addToBasket = Function.prototype}) => {

  if (!goods.length) {
    return <h3>Товары не найдены!</h3>
  }

  return (
    <div className='goods'>
      {goods.map(good => <Good key={good.mainId} {...good} addToBasket={addToBasket}/>)}
    </div>
  );
};

export default GoodsList;
