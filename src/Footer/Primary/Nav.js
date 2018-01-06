import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.span`
  display: block;
  margin-bottom: 16px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 18px;
  color: #383838;
  font-weight: bold;

  @media (max-width: 992px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const Link = styled.a`
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

  @media (max-width: 992px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export default function() {
  return (
    <React.Fragment>
      <div className="col-md-2 col-md-offset-1 col-sm-2 col-sm-offset-1 hidden-xs">
        <Title>Airbnb</Title>
        <Link href="#">About us</Link>
        <Link href="#">Careers</Link>
        <Link href="#">Press</Link>
        <Link href="#">Policies</Link>
        <Link href="#">Help</Link>
        <Link href="#">Diversity & Belonging</Link>
      </div>
      <div className="col-md-2 col-md-offset-1 col-sm-2 col-sm-offset-1 hidden-xs">
        <Title>Discover</Title>
        <Link href="#">Trust & Safety</Link>
        <Link href="#">Travel Credit</Link>
        <Link href="#">Gift Cards</Link>
        <Link href="#">Airbnb Citizen</Link>
        <Link href="#">Business Travel</Link>
        <Link href="#">Guidebooks</Link>
        <Link href="#">Airbnbmag</Link>
      </div>
      <div className="col-md-2 col-md-offset-1 col-sm-2 col-sm-offset-1 hidden-xs">
        <Title>Hosting</Title>
        <Link href="#">Why Host</Link>
        <Link href="#">Hospitality</Link>
        <Link href="#">Responsible Hosting</Link>
        <Link href="#">Community Center</Link>
      </div>
    </React.Fragment>
  );
}
