import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Nav from "./Nav";
import logo from "./headerLogo.svg";

const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
  padding: 16px 0;
  background: #fff;
  box-shadow: 0 0.5px 0 rgba(72, 72, 72, 0.3);
`;

const Logo = styled(Link)`
  position: relative;
  display: inline-block;
  margin: 8px 0;
  width: 30px;
  height: 32px;
  background: url(${logo}) no-repeat center center;
  background-size: cover;

  &:after {
    content: "";
    position: absolute;
    top: 16px;
    right: -17px;
    display: inline-block;
    width: 10px;
    height: 10px;
    border: none;
    background: url(/static/media/dropdownArrow.b2745bbd.svg) no-repeat center;
    background-size: contain;
    cursor: pointer;

    @media (min-width: 992px) {
      display: none;
    }
  }
`;

export default () => {
  return (
    <Header>
      <div className="container">
        <div className="row">
          <div className="col-xs-2 col-sm-1">
            <Logo to="/" />
          </div>
          <div className="col-xs-10 col-sm-7 col-md-5">
            <SearchBar />
          </div>
          <div className="hidden-xs hidden-sm hidden-md col-lg-offset-2 col-lg-4">
            <Nav />
          </div>
        </div>
      </div>
    </Header>
  );
};
