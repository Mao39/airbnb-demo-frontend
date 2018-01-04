import React, { Component } from "react";
import styled from "styled-components";
import Parametrs from "./Parametrs";
import Nav from "./Nav";
import Bottom from "./Bottom";

const Footer = styled.footer`
  margin-top: 64px;
  padding-top: 48px;
  box-shadow: 0 -0.5px 0 rgba(72, 72, 72, 0.3);
`;

const Service = styled.div``;

export default function() {
  return (
    <Footer>
      <Service>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Parametrs />
            </div>
            <Nav />
          </div>
        </div>
      </Service>
      <Bottom />
    </Footer>
  );
}
