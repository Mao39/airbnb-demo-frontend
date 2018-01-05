import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import SearchBar from "./SearchBar";
import Nav from "./Nav";
import arrow from "./arrow.svg";

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  box-shadow: 0 0.5px 0 rgba(72, 72, 72, 0.3);
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Logo = styled.img``;

const Dropdown = styled.img`
  display: inline-block;
  margin-left: 4px;
  width: 8.6px;
  height: 10px;
`;

export default function() {
  return (
    <Header>
      <div className="container">
        <div className="row">
          <div className="col-md-1 col-sm-1 col-xs-2">
            <Link href="#">
              <Logo src={logo} alt="Logo" />
              <div className="hidden-md">
                <Dropdown src={arrow} alt="Arrow" />
              </div>
            </Link>
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
