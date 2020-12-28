import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Total from '@elements/basket/Total';
import BarCard from '@layouts/basket/BarCard';
import ToppingContainer from '@layouts/basket/ToppingContainer';

import { changeItem } from '@modules/cart';

import '@scss/pages/Basket.scss';

const Basket = () => {
  const dispatch = useDispatch();
  const { items, toppings } = useSelector(state => ({
    items: state.cart.items,
    toppings: state.cart.toppings,
  }));
  const [number, setNumber] = useState(0);
  const [price, setPrice] = useState(0);
  const onChange = (_id, _number) => {
    dispatch(changeItem(_id, _number));
  };
  useEffect(() => {
    setNumber(
      items.reduce((acc, cur) => {
        return acc + cur.number;
      }, 0) +
        toppings.reduce((acc, cur) => {
          return acc + cur.number;
        }, 0),
    );
    setPrice(
      items.reduce((acc, cur) => {
        return acc + cur.price * cur.number;
      }, 0) +
        toppings.reduce((acc, cur) => {
          return acc + cur.price * cur.number;
        }, 0),
    );
  }, [items, toppings]);
  return (
    <div className="basket">
      <div className="basket__container">
        {items.map(item => {
          return (
            <BarCard
              key={item.name}
              name={item.name}
              image={item.src}
              originalPrice={item.price}
              initialNumber={item.number}
              onChange={onChange}
            />
          );
        })}
        <div className="basket__container--bottom">
          <ToppingContainer />
          <Total price={price} number={number} />
        </div>
      </div>
    </div>
  );
};

export default Basket;
