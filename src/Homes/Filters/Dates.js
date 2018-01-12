import React, { Component } from "react";
import styled, { css } from "styled-components";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
import omit from "lodash/omit";

import cross from "../../UI/cross.svg";

const DayPicker = styled(DayPickerRangeController)`
  position: relative;
  padding-bottom: 72px;
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
  transition: all 0.3s;

  color: ${props => (props.isOpen ? "#fff" : "#383838")};
  background: ${props => (props.isOpen ? "#008489" : "transparent")};
`;

const Filter = styled.aside`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;

  @media (min-width: 576px) {
    position: absolute;
    top: 40px;
    left: 0;
    display: inline-block;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  height: 48px;
  padding: 0 8px;
  box-shadow: 0 0.5px rgba(72, 72, 72, 0.3);

  @media (min-width: 576px) {
    display: none;
  }
`;

const Caption = styled.span`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: #383838;
`;

const Exit = styled.button`
  width: 16px;
  height: 16px;
  background: url(${cross}) no-repeat center;
  background-size: contain;
  border: none;
  cursor: pointer;
`;

const Reset = styled.button`
  padding: 0;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: #0f7276;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Bottom = styled.div`
  position: relative;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  height: 64px;
  width: 100%;
  padding: 8px;
  box-shadow: 0 -1px #d5d5d5;
  z-index: 4;

  @media (min-width: 576px) {
    padding: 0;
    box-shadow: none;
  }
`;

const Cancel = styled.button`
  width: 110px;
  height: 64px;
  border: none;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  color: #636363;
  background: transparent;
  cursor: pointer;
`;

const Apply = styled.button`
  width: 110px;
  height: 64px;
  border: none;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  color: #008489;
  background: transparent;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 137px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: rgba(255, 255, 255, 0.8);
`;

export default class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isTouchDevice: true,
      focusedInput: props.autoFocusEndDate ? "startDate" : "endDate",
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
      isLog: null
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  renderCalendarInfo = () => {
    return (
      <Bottom>
        {this.state.startDate && this.state.endDate ? (
          <Cancel onClick={this.onReset}>Reset</Cancel>
        ) : (
          <Cancel onClick={this.changeOpen}>Cancel</Cancel>
        )}
        <Apply onClick={this.changeOpen}>Apply</Apply>
      </Bottom>
    );
  };

  onReset = () => {
    this.setState({ startDate: null, endDate: null });
    this.changeOpen();
  };

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({
      focusedInput: !focusedInput ? "startDate" : focusedInput
    });
  }

  changeOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const {
      isOpen,
      startDate,
      endDate,
      isTouchDevice,
      focusedInput
    } = this.state;
    const props = omit(this.props, [
      "autoFocus",
      "autoFocusEndDate",
      "initialStartDate",
      "initialEndDate"
    ]);

    const startDateString = startDate && startDate.format("YYYY-MM-DD");
    const endDateString = endDate && endDate.format("YYYY-MM-DD");

    const calendar = (
      <DayPicker
        numberOfMonths={matchMedia("(min-width: 992px)").matches ? 2 : 1}
        isTouchDevice={isTouchDevice}
        hideKeyboardShortcutsPanel
        isOpen={isOpen}
        renderCalendarInfo={this.renderCalendarInfo}
        onDatesChange={this.onDatesChange}
        onFocusChange={this.onFocusChange}
        focusedInput={focusedInput}
        startDate={startDate}
        endDate={endDate}
      />
    );

    return (
      <React.Fragment>
        <Btn isOpen={this.state.isOpen} onClick={this.changeOpen}>
          {startDate && endDate
            ? `${startDateString} — ${endDateString}`
            : isOpen ? "Check in — Check out" : "Dates"}
          <btnContent />
          <Filter isOpen={isOpen}>
            <Header>
              <Exit />
              <Caption>Dates</Caption>
              <Reset>Reset</Reset>
            </Header>
            {isOpen ? calendar : null}
          </Filter>
        </Btn>
        {isOpen ? <Overlay onClick={this.changeOpen} /> : null}
      </React.Fragment>
    );
  }
}
