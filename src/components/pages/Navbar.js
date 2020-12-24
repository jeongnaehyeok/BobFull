import React, { useRef } from 'react';
import HeaderBar from '@layouts/navbar/HeaderBar';

const Navbar = ({ isActive, hook }) => {
  const navbarRef = useRef();
  return (
    <header ref={navbarRef}>
      <HeaderBar navbarRef={navbarRef} hook={hook} isActive={isActive} />
    </header>
  );
};

export default Navbar;
