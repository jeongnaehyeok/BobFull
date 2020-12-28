import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@images/Logo.png';
import Hamburger from '@elements/navbar/Hamburger';

import '@scss/layouts/navbar/HeaderBar.scss';

const HeaderBar = ({ navbarRef, hook }) => {
  return (
    <>
      <div className="header__inner">
        <div className="header__logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="header__menu">
          <Hamburger el={navbarRef} hook={hook} />
        </div>
      </div>
    </>
  );
};

HeaderBar.defaultProps = {
  navbarRef: '',
  hook: () => {},
};

export default HeaderBar;
