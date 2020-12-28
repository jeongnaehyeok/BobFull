import React, { useState } from 'react';
import '@scss/commons/Counter.scss';

const Counter = ({ onChange, initialNumber }) => {
  const [number, setNumber] = useState(initialNumber);
  const onDecrease = () => {
    if (number === 0) return;
    setNumber(number - 1);
    onChange(number - 1);
  };
  const onIecrease = () => {
    if (number === 20) return;
    setNumber(number + 1);
    onChange(number + 1);
  };
  return (
    <div className="counter">
      <button onClick={onDecrease} className="counter--button">
        -
      </button>
      <span className="counter--number">{number}</span>
      <button onClick={onIecrease} className="counter--button">
        +
      </button>
    </div>
  );
};

Counter.defaultProps = {
  initialNumber: 0,
  onChange: () => {},
};

export default Counter;
