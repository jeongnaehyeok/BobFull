import React from 'react';
import Total from '@elements/basket/Total';
// import BarCard from '@layouts/basket/BarCard';
import ToppingContainer from '@layouts/basket/ToppingContainer';
import '@scss/pages/Basket.scss';

const Basket = () => {
  // const [number, setNumber] = useState(0);
  // const [price, setPrice] = useState(0);
  const [number, price] = [4, 20000];
  return (
    <div className="basket">
      <div className="basket__container">
        {/* <BarCard /> */}
        <div className="basket__container--bottom">
          <ToppingContainer />
          <Total price={price} number={number} />
        </div>
      </div>
    </div>
  );
};

export default Basket;
