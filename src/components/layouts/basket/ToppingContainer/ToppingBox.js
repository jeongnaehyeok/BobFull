import React, { useState } from 'react';
import Counter from '@commons/Counter';
import '@scss/layouts/basket/ToppingBox.scss';

const ToppingBox = ({ name, image, number, originPrice, onChange }) => {
  const [price, setPrice] = useState(originPrice * number);
  const onChangeCounter = _number => {
    onChange(name, _number);
    setPrice(originPrice * _number);
  };
  return (
    <div className="toppingbox">
      <div className="toppingbox--img">
        <img
          src={image}
          alt={name}
          className={number ? 'active' : 'deactive'}
        />
      </div>
      <p>{name}</p>
      <p className={number ? 'active' : 'deactive'}>
        ₩ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </p>
      <Counter initialNumber={number} onChange={onChangeCounter} />
    </div>
  );
};

ToppingBox.defaultProps = {
  name: '',
  image: '',
  alt: '토핑사진',
  originPrice: 500,
  onChange: () => {},
};

export default ToppingBox;
