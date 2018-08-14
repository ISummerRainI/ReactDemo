
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import errorPage from 'pages/errorPage';
export default (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} ></Route>
      <Route path="/home" component={Home} ></Route>
      <Route path="*" component={errorPage}></Route>
    </Switch>
  </HashRouter>
);