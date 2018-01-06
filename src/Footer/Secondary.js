import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "./Primary/Nav";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import logo from "./logo.svg";

const Bottom = styled.div`
  margin-top: 48px;
  padding-top: 16px;
  height: 88px;
  border-top: 1px solid rgba(72, 72, 72, 0.08);

  @media (min-width: 576px) {
    padding-top: 0;
  }
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 14px;
  font-weight: 600;
  color: #636363;
  text-decoration: none;

  @media (min-width: 320px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const Logo = styled.img``;

const Copyright = styled.span`
  margin-left: 12px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 14px;
  font-weight: 600;
  color: #636363;
  text-decoration: none;

  @media (min-width: 992px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const Social = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  background-size: 16px 16px;

  @media (min-width: 576px) {
    height: 88px;
  }
`;

const Icon = styled.a`
  width: 22px;
  height: 32px;
  background-repeat: no-repeat;
`;

export default function() {
  return (
    <Bottom>
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-3 col-xs-5">
            <Brand href="#">
              <Logo src={logo} alt="Logo" />
              <Copyright>© Airbnb Inc.</Copyright>
            </Brand>
          </div>
          <div className="col-md-4 col-md-offset-6 col-sm-6 col-sm-offset-3 col-xs-10">
            <Social>
              <Link href="#">Terms</Link>
              <Link href="#">Privacy</Link>
              <Link href="#">Site map</Link>
              <Icon href="#" style={{ backgroundImage: `url(${facebook})` }} />
              <Icon href="#" style={{ backgroundImage: `url(${twitter})` }} />
              <Icon href="#" style={{ backgroundImage: `url(${instagram})` }} />
            </Social>
          </div>
        </div>
      </div>
    </Bottom>
  );
}
