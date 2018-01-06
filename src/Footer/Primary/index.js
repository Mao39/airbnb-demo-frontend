import React, { Component } from "react";
import styled from "styled-components";
import Selects from "./Selects";
import Nav from "./Nav";

const Service = styled.div``;

export default function() {
  return (
    <Service>
      <div className="container">
        <div className="row">
          <Selects />
          <Nav />
        </div>
      </div>
    </Service>
  );
}
