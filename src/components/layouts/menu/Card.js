import React, { useState } from 'react';
import classNames from 'classnames';
import Counter from '@commons/Counter';
import '@scss/layouts/menu/Card.scss';

const Card = ({ initialPrice, menuName }) => {
  const [price, setPrice] = useState(initialPrice);
  const [number, setNumber] = useState(0);
  const onChange = _number => {
    setNumber(_number);
    if (_number === 0) return;
    setPrice(initialPrice * _number);
  };
  return (
    <div className="card">
      <img src="https://place-hold.it/768x576" alt="여백의미" />
      <div className="card__box">
        <p className="title">{menuName}</p>
        <span className="iteminfo">
          <div className="iteminfo--price">
            <p className={number ? 'active' : ''}>
              ₩ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
          </div>
          <Counter onChange={onChange} initialNumber={number} />
        </span>
        <button
          className={classNames(
            'iteminfo--addCard',
            number ? 'active' : 'deactive',
          )}
        >
          담기
        </button>
      </div>
    </div>
  );
};

Card.defaultProps = {
  menuName: '오리지널 밥풀',
  initialPrice: 4000,
};

export default Card;
