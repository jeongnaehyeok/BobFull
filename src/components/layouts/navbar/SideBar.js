import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from '@images/Logo.png';

import '@scss/layouts/navbar/SideBar.scss';

const SideBar = ({ isActive }) => {
  return (
    <div className={classNames('sidebar', isActive ? 'active' : 'deactive')}>
      <div className="sidebar__top">
        <img src={Logo} alt="Logo" />
        <div className="link__container">
          <Link className="link__item" to="/menu/friedrice">
            볶음밥
          </Link>
          <Link className="link__item" to="/menu/ricebowl">
            덮밥
          </Link>
          <Link className="link__item" to="/menu/steak">
            스테이크
          </Link>
          <Link className="link__item" to="/menu/noodle">
            면
          </Link>
        </div>
      </div>
      <div className="sidebar__bottom--items">
        <p>포장</p>
        <a href="tel:063-223-6523">063-223-6523</a>
      </div>
    </div>
  );
};

SideBar.defaultProps = {
  isActive: false,
};
export default SideBar;
