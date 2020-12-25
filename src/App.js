import React, { useState } from 'react';
import classNames from 'classnames';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from '@pages/Navbar';
import Home from '@pages/Home';
import Menu from '@pages/Menu';
import Basket from '@pages/Basket';

import '@scss/App.scss';

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const navToggle = state => {
    setIsActive(state);
  };
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar isActive={isActive} hook={navToggle} />
        <main className={isActive ? 'active' : 'deactive'}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu/:kind" exact component={Menu} />
            <Route path="/basket" exact component={Basket} />
            <Redirect path="*" to="/" />
          </Switch>
        </main>
        <div
          className={classNames('overlap', isActive ? 'active' : 'deactive')}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
