import React, { Component } from "react";
import styled from "styled-components";

export const Title = styled.span`
  display: block;
  margin-bottom: 16px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 18px;
  color: #383838;
  font-weight: bold;
`;

export const Item = styled.a`
  display: block;
  margin-bottom: 8px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 18px;
  font-weight: 600;
  color: #636363;
  text-decoration: none;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export default function() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
