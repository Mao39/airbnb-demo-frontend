import React, { Component } from "react";
import styled from "styled-components";
import search from "../UI/search.svg";

const SearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 22px;
  transform: translateY(-50%);
  display: inline-block;
  width: 15px;
  height: 16px;
  border: none;
  background: url(${search}) no-repeat center center;
  background-size: cover;
  cursor: pointer;

  @media (min-width: 576px) {
    width: 22px;
    height: 24px;
  }
`;

const Input = styled.input`
  margin-left: 8px;
  width: 100%;
  height: 48px;
  padding-left: 35px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: #383838;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);

  @media (min-width: 576px) {
    padding-left: 52px;
    font-size: 16px;
  }
`;

export default function() {
  return (
    <SearchBar>
      <Button />
      <Input type="text" defaultValue="Try &quot;Miami&quot;" />
    </SearchBar>
  );
}
