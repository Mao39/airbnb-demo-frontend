import React, { Component } from "react";
import styled from "styled-components";
import Parametrs from "./Parametrs";
import Nav from "./Nav";
import Bottom from "./Bottom";

export const Footer = styled.footer`
  margin-top: 64px;
  padding-top: 48px;
  box-shadow: 0 -0.5px 0 rgba(72, 72, 72, 0.3);
`;

export const Service = styled.div``;

export const Logo = styled.img``;

export const Copyright = styled.span`
  margin-left: 12px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 18px;
  font-weight: 400;
  color: #636363;
  text-decoration: none;
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 88px;
  background-size: 16px 16px;
`;

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
