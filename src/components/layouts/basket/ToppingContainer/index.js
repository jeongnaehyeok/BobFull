import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeTopping } from '@modules/cart';
import ToppingBox from './ToppingBox';

import '@scss/layouts/basket/ToppingContainer.scss';

const ToppingContainer = () => {
  const dispatch = useDispatch();
  const toppings = useSelector(state => state.cart.toppings);
  const onChangeTopping = (_name, _price) => {
    dispatch(changeTopping(_name, _price));
  };
  return (
    <div className="toppingcontainer">
      <p className="toppingcontainer--title">Topping</p>
      <div className="toppingcontainer--box">
        {toppings.map(item => {
          return (
            <ToppingBox
              key={item.name}
              number={item.number}
              image={item.src}
              name={item.name}
              originPrice={item.price}
              onChange={onChangeTopping}
            />
          );
        })}
      </div>
    </div>
  );
};

ToppingContainer.defaultProps = {
  onChange: () => {},
};

export default ToppingContainer;
