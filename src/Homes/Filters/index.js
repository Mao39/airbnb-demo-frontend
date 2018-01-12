import React, { Component } from "react";
import styled from "styled-components";
import Guests from "./Guests";
import Room from "./Room";
import Dates from "./Dates";

const FiltersWrap = styled.div`
  position: fixed;
  top: 80px;
  right: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  align-content: flex-start;
  height: 56px;
  background: #fff;
  box-shadow: 0 0 0.5px rgba(72, 72, 72, 0.3);

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

const Btn = styled.button`
  position: relative;
  margin-right: 8px;
  padding: 7px 16px;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 4px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #383838;
  background: transparent;
  cursor: pointer;
`;

export default class Filters extends React.Component {
  render() {
    return (
      <FiltersWrap>
        <div className="container">
          <Dates />
          <Btn>
            Guests<Guests />
          </Btn>
          <Btn>More filters</Btn>
        </div>
      </FiltersWrap>
    );
  }
}
