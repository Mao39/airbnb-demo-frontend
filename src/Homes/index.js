import React from 'react';
import Filters from './Filters';
import List from './List';
import GoogleMap from './Location';

export default () => (
  <React.Fragment>
    <Filters />
    <List />
    <GoogleMap />
  </React.Fragment>
);
