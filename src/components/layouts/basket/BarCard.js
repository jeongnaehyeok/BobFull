import React, { useState } from 'react';
import Counter from '@commons/Counter';
import '@scss/layouts/basket/BarCard.scss';

const BarCard = ({ name, image, originalPrice, initialNumber, onChange }) => {
  const [price, setPrice] = useState(originalPrice * initialNumber);
  const [number, setNumber] = useState(initialNumber);
  const onChangeCounter = _number => {
    setPrice(originalPrice * _number);
    setNumber(_number);
    onChange(name, _number);
  };
  return (
    <div className="barcard">
      <div className="barcard--img">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <p className="info--title">{name}</p>
        <div className="info--calc">
          <p>₩ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
          <Counter onChange={onChangeCounter} initialNumber={number} />
        </div>
      </div>
    </div>
  );
};

BarCard.defaultProps = {
  name: '밥풀',
  image: '',
  originalPrice: 3000,
  initialNumber: 1,
  onChange: () => {},
};

export default BarCard;
