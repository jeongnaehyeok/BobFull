import React, { useState } from 'react';
import Counter from '@commons/Counter';
import '@scss/layouts/basket/BarCard.scss';

const BarCard = ({ id, originalPrice, initialNumber, onChnage }) => {
  const [price, setPrice] = useState(originalPrice * initialNumber);
  const [number, setNumber] = useState(initialNumber);
  const onChangeCounter = _number => {
    setPrice(originalPrice * _number);
    setNumber(_number);
    onChnage(id, _number - number, originalPrice);
  };
  return (
    <div className="barcard">
      <div className="barcard--img">
        <img src="https://place-hold.it/768x900" alt="여백의미" />
      </div>
      <div className="info">
        <p className="info--title">한국대표 밥풀</p>
        <div className="info--calc">
          <p>₩ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
          <Counter onChange={onChangeCounter} initialNumber={initialNumber} />
        </div>
      </div>
    </div>
  );
};

BarCard.defaultProps = {
  id: 1,
  originalPrice: 3000,
  initialNumber: 1,
  onChnage: () => {},
};

export default BarCard;
