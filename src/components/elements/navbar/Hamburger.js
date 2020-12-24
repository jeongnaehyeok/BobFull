import React, { useEffect } from 'react';
import classNames from 'classnames';

import useNavToggle from '@utils/hooks/useNavToggle';

import '@scss/elements/navbar/Hamburger.scss';

const Hamburger = ({ el, state, hook }) => {
  const [isActive, setIsActive] = useNavToggle(el, state);
  const onClick = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    hook(isActive);
  });
  return (
    <button
      type="button"
      className={classNames('hamburger', isActive ? 'active' : '')}
      onClick={onClick}
    >
      <div className="hamburger__line" />
      <div className="hamburger__line" />
      <div className="hamburger__line" />
    </button>
  );
};

Hamburger.defaultProps = {
  el: '',
  state: false,
  hook: () => {},
};

export default Hamburger;
