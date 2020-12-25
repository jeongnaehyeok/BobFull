import React from 'react';
import '@scss/elements/basket/Total.scss';

const Total = ({ number, price }) => {
  const totalPrice = price;
  const totalNumber = number;
  return (
    <div className="total">
      <p>총</p>
      <p>{totalNumber} 개</p>
      <p>₩ {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
    </div>
  );
};

Total.defaultProps = {
  number: 0,
  price: 0,
};

export default Total;
