import React, { useState } from 'react';
import classNames from 'classnames';
import Counter from '@commons/Counter';
import '@scss/layouts/menu/Card.scss';

const Card = ({ id, initialPrice, menuName, image, onClick }) => {
  const [price, setPrice] = useState(initialPrice);
  const [number, setNumber] = useState(0);
  const onChangeCounter = _number => {
    setNumber(_number);
    if (_number === 0) return;
    setPrice(initialPrice * _number);
  };
  const onAddCart = () => {
    onClick(id, number);
  };
  return (
    <div className="card">
      <img src={image} alt={id} />
      <div className="card__box">
        <p className="title">{menuName}</p>
        <span className="iteminfo">
          <div className="iteminfo--price">
            <p className={number ? 'active' : ''}>
              ₩ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
          </div>
          <Counter onChange={onChangeCounter} initialNumber={number} />
        </span>
        <button
          onClick={onAddCart}
          className={classNames(
            'iteminfo--addcard',
            number ? 'active' : 'deactive',
          )}
          disabled={!number}
        >
          담기
        </button>
      </div>
    </div>
  );
};

Card.defaultProps = {
  id: 1,
  menuName: '오리지널 밥풀',
  initialPrice: 4000,
  image: 'https://place-hold.it/768x576',
};

export default Card;
