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
  padding: 12px 0;
  background: #fff;
  box-shadow: 0 0 0.5px rgba(72, 72, 72, 0.3);
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
  state = {
    isOpen: false,
    startDate: null,
    endDate: null
  };

  saveChoice = (startDate, endDate) => {
    this.setState({
      startDate: startDate,
      endDate: endDate
    });
  };

  toggleDropdown = isOpen => {
    this.setState({ isOpen: !isOpen });
  };

  closeDropdown = () => {};

  render() {
    return (
      <FiltersWrap>
        <div className="container">
          <Dates
            toggleDropdown={this.toggleDropdown}
            isOpen={this.state.isOpen}
            saveChoice={this.saveChoice}
          />
          <Guests
            isOpen={this.state.isOpen}
            toggleDropdown={this.toggleDropdown}
          />
          <Btn>More filters</Btn>
        </div>
      </FiltersWrap>
    );
  }
}
