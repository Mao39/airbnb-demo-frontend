import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Homes from './Homes';

export default () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/homes" component={Homes} />
    </React.Fragment>
  </BrowserRouter>
);
