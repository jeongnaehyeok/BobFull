import React from 'react';
import Total from '@elements/basket/Total';
import BarCard from '@layouts/basket/BarCard';
import '@scss/pages/Basket.scss';

const Basket = () => {
  // const [number, setNumber] = useState(0);
  // const [price, setPrice] = useState(0);
  const [number, price] = [4, 20000];
  return (
    <div className="basket">
      <div className="basket__container">
        <BarCard />
        <Total price={price} number={number} />
      </div>
    </div>
  );
};

export default Basket;
