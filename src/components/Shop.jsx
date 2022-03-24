import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';

const Shop = () => {

  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(el => el.id === item.id)
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      }
      setOrder([...order, newItem])

    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else {
          return orderItem
        }
      })
      setOrder(newOrder)
    }
    setAlertName(item.title)
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter(el => el.id !== itemId);
    setOrder(newOrder)
  }

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow)
  }

  const closeAlert = () => {
    setAlertName('')
  }

  const incOrder = (itemId) => {
      const newOrder = order.map(el => {
        if (el.id === itemId) {
          const newQuantity = el.quantity + 1;
          return {
            ...el,
            quantity: newQuantity
          }
        } else {
          return el
        }
      })
      setOrder(newOrder)
  }

  const decOrder = (itemId) => {
    const newOrder = order.map(el => {
      if (el.id === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0
        }
      } else {
        return el
      }
    })
    setOrder(newOrder)
  }

    useEffect(function getGoods() {
      fetch(API_URL, {
        headers: {
          'Authorization': API_KEY,
        }
      })
        .then(response => response.json())
        .then(data => {
          data.shop && setGoods(data.shop);
          setLoading(false)
        })
    }, [])

    return (
      <main className="container content">
        <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
        {
          loading ? <Preloader/> : <GoodsList goods={goods} addToBasket={addToBasket}/>
        }
        {
          isBasketShow && <BasketList
            order={order}
            handleBasketShow={handleBasketShow}
            removeFromBasket={removeFromBasket}
            incOrder={incOrder}
            decOrder={decOrder}/>
        }
        {
          alertName && <Alert name={alertName} closeAlert={closeAlert} />
        }
      </main>
    );
  };

  export default Shop;
