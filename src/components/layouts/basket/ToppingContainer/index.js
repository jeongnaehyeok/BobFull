import React from 'react';
import Topping from '@utils/datas/Topping.json';
import ToppingBox from './ToppingBox';
import '@scss/layouts/basket/ToppingContainer.scss';

const ToppingContainer = ({ onChange }) => {
  const onChangeTopping = _price => {
    onChange(_price);
  };
  return (
    <div className="toppingcontainer">
      <p className="toppingcontainer--title">Topping</p>
      <div className="toppingcontainer--box">
        {Topping.map(item => {
          return (
            <ToppingBox
              key={item.name}
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
