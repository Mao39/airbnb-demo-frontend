import React, { Component } from "react";
import styled from "styled-components";

import arrow from "./arrow.svg";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";
import logo from "./logo.svg";

export const Service = styled.div``;

export const Footer = styled.footer`
  margin-top: 64px;
  padding-top: 48px;
  box-shadow: 0 -0.5px 0 rgba(72, 72, 72, 0.3);
`;

export const Official = styled.div`
  margin-top: 48px;
  height: 88px;
  border-top: 1px solid rgba(72, 72, 72, 0.08);
`;

export const Parametrs = styled.select`
  margin-bottom: 16px;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background: url(${arrow}) no-repeat right 20px top 20px;
  appearance: none;
`;

export const Select = styled.option`
  font-size: 18px;
  line-height: 21px;
  font-weight: 100;
  color: #383838;
`;

export const Nav = styled.nav``;

export const Title = styled.span`
  display: block;
  margin-bottom: 16px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 18px;
  color: #383838;
  font-weight: 900;
`;

export const Item = styled.a`
  display: block;
  margin-bottom: 8px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 18px;
  font-weight: 400;
  color: #636363;
  text-decoration: none;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const Copyright = styled.span`
  margin-left: 12px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 18px;
  font-weight: 400;
  color: #636363;
  text-decoration: none;
`;

export const Logo = styled.img``;

export const Link = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 18px;
  font-weight: 400;
  color: #636363;
  text-decoration: none;
`;

export const Social = styled.div`
  display: flex;
  height: 88px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-size: 16px 16px;
`;

export default function() {
  return (
    <Footer>
      <Service>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Parametrs>
                <Select value="English" selected>
                  English
                </Select>
                <Select value="Русский">Русский</Select>
              </Parametrs>
              <Parametrs>
                <Select value="United States dollar" selected>
                  United States dollar
                </Select>
                <Select value="Русский рубль">Русский рубль</Select>
              </Parametrs>
            </div>
            <div className="col-md-2 col-md-offset-1">
              <Title>Airbnb</Title>
              <Item href="./">About us</Item>
              <Item href="./">Careers</Item>
              <Item href="./">Press</Item>
              <Item href="./">Policies</Item>
              <Item href="./">Help</Item>
              <Item href="./">Diversity & Belonging</Item>
            </div>
            <div className="col-md-2 col-md-offset-1">
              <Title>Discover</Title>
              <Item href="./">Trust & Safety</Item>
              <Item href="./">Travel Credit</Item>
              <Item href="./">Gift Cards</Item>
              <Item href="./">Airbnb Citizen</Item>
              <Item href="./">Business Travel</Item>
              <Item href="./">Guidebooks</Item>
              <Item href="./">Airbnbmag</Item>
            </div>
            <div className="col-md-2 col-md-offset-1">
              <Title>Hosting</Title>
              <Item href="./">Why Host</Item>
              <Item href="./">Hospitality</Item>
              <Item href="./">Responsible Hosting</Item>
              <Item href="./">Community Center</Item>
            </div>
          </div>
        </div>
      </Service>
      <Official>
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
      </Official>
    </Footer>
  );
}
