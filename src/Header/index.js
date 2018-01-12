import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Nav from "./Nav";
import arrow from "../UI/dropdownArrow.svg";
import logo from "./headerLogo.svg";

const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  height: 80px;
  background: #fff;
  box-shadow: 0 0.5px 0 rgba(72, 72, 72, 0.3);

  & > .container {
    margin: 0;
  }

  @media (min-width: 576px) {
    & > .container {
      margin-right: auto;
      margin-left: auto;
    }
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Logo = styled.img`
  width: 30px;
  height: 32px;
`;

const Dropdown = styled.button`
  display: inline-block;
  margin-left: 5px;
  width: 5.5px;
  height: 10px;
  border: none;
  background: url(${arrow}) no-repeat center center;
  background-size: contain;
  cursor: pointer;

  @media (min-width: 992px) {
    display: none;
  }
`;

export default () => {
  return (
    <Header>
      <div className="container">
        <div className="row">
          <div className="col-xs-2 col-sm-1 col-md-1">
            <LogoLink to="/">
              <Logo src={logo} alt="Logo" />
              <Dropdown />
            </LogoLink>
          </div>
          <div className="col-xs-10 col-sm-7 col-md-5">
            <SearchBar />
          </div>
          <div className="col-md-offset-2 col-md-4">
            <Nav />
          </div>
        </div>
      </div>
    </Header>
  );
};
