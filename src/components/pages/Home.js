import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@images/Logo.png';
import SubLogo from '@images/SubLogo.png';
import '@scss/pages/Home.scss';

const Home = () => {
  return (
    <div className="home">
      <img className="logo" src={Logo} alt="Logo" />
      <img className="sublogo" src={SubLogo} alt="SubLogo" />
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
  );
};

export default Home;
