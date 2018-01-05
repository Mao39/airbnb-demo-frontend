import React, { Component } from "react";
import styled from "styled-components";
import search from "./search.svg";

const SearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Button = styled.span`
  position: absolute;
  top: 50%;
  left: 16.2px;
  transform: translateY(-50%);
  display: inline-block;
  width: 22px;
  height: 22px;
  border: none;
  background: url(${search}) no-repeat center center;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  padding-left: 52px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #383838;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
`;

export default function() {
  return (
    <SearchBar>
      <Button />
      <Input type="text" defaultValue="Try &quot;Miami&quot;" />
    </SearchBar>
  );
}
