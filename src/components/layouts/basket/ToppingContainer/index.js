import React from 'react';
import Egg from '@images/Egg.png';
import Cheddar from '@images/Cheddar.png';
import Mozzarella from '@images/Mozzarella.png';
import Drink from '@images/Drink.png';
import ToppingBox from './ToppingBox';
import '@scss/layouts/basket/ToppingContainer.scss';

const ToppingContainer = ({ onChange }) => {
  const ToppingList = [
    { name: '계란', src: Egg, price: 500 },
    { name: '체다치즈', src: Cheddar, price: 500 },
    { name: '모짜치즈', src: Mozzarella, price: 1000 },
    { name: '음료수', src: Drink, price: 1500 },
  ];
  const onChangeTopping = _price => {
    onChange(_price);
  };
  return (
    <div className="toppingcontainer">
      <p className="toppingcontainer--title">Topping</p>
      <div className="toppingcontainer--box">
        {ToppingList.map(item => {
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
