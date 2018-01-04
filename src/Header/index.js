import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import SearchBar from "./SearchBar";
import Nav from "./Nav";

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  box-shadow: 0 0.5px 0 rgba(72, 72, 72, 0.3);
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
`;

export default function() {
  return (
    <Header>
      <div className="container">
        <div className="row">
          <div className="col-md-1 col-sm-1 col-xs-2">
            <Logo href="./">
              <img src={logo} alt="Logo" />
            </Logo>
          </div>
          <div className="col-md-5 col-sm-7 col-xs-10">
            <SearchBar />
          </div>
          <div className="col-md-offset-2 col-md-4 hidden-sm hidden-xs">
            <Nav />
          </div>
        </div>
      </div>
    </Header>
  );
}
