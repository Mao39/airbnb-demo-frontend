import React, { Component } from "react";
import styled from "styled-components";
import { Item } from "./Nav";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import logo from "./logo.svg";

export const Bottom = styled.div`
  margin-top: 48px;
  height: 88px;
  border-top: 1px solid rgba(72, 72, 72, 0.08);
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 18px;
  font-weight: 600;
  color: #636363;
  text-decoration: none;
`;

export const Logo = styled.img``;

export const Copyright = styled.span`
  margin-left: 12px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 18px;
  font-weight: 600;
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
    <React.Fragment>
      <Bottom>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <Link href="./">
                <Logo src={logo} alt="Logo" />
                <Copyright>© Airbnb Inc.</Copyright>
              </Link>
            </div>
            <div className="col-md-4 col-md-offset-6">
              <Social>
                <Item href="./">Terms</Item>
                <Item href="./">Privacy</Item>
                <Item href="./">Site map</Item>
                <Item
                  href="./"
                  style={{
                    backgroundImage: `url(${facebook})`,
                    height: `24px`,
                    width: `24px`
                  }}
                />
                <Item
                  href="./"
                  style={{
                    backgroundImage: `url(${twitter})`,
                    height: `24px`,
                    width: `24px`
                  }}
                />
                <Item
                  href="./"
                  style={{
                    backgroundImage: `url(${instagram})`,
                    height: `24px`,
                    width: `24px`
                  }}
                />
              </Social>
            </div>
          </div>
        </div>
      </Bottom>;
    </React.Fragment>
  );
}
