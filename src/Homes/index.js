import React, { Component } from "react";
import styled from "styled-components";
import Filters from "./Filters";
import List from "./List";
import Pagination from "./Pagination";
import GoogleMap from "./Location";

export default function() {
  return (
    <React.Fragment>
      <Filters />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-8">
            <List />
            <Pagination />
          </div>
          <GoogleMap />
        </div>
      </div>
    </React.Fragment>
  );
}
