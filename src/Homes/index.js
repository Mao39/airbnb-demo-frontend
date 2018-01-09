import React, { Component } from "react";
import styled from "styled-components";
import Filters from "./Filters";
import List from "./List";
import GoogleMap from "./Location";

export default function() {
  return (
    <React.Fragment>
      <Filters />
      <List />
      <GoogleMap />
    </React.Fragment>
  );
}
