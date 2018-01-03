import React, { Component } from "react";
import styled from "styled-components";
import search from "./search.svg";

export const InputSearch = styled.input`
  height: 48px;
  width: 100%;
  padding-left: 52px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #383838;
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16.2px;
  display: inline-block;
  width: 22px;
  height: 22px;
  border: none;
  background: url(${search}) no-repeat center center;
  cursor: pointer;
`;

export const SearchBar = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export default function() {
  return (
    <SearchBar method="POST">
      <Button type="submit" />
      <InputSearch type="text" defaultValue="Try &quot;Miami&quot;" />
    </SearchBar>
  );
}
