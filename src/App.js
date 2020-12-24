import React, { useState } from 'react';
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
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu/:kind" exact component={Menu} />
            <Route path="/basket" exact component={Basket} />
            <Redirect path="*" to="/" />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
