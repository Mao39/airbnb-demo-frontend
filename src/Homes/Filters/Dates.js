import React, { Component } from "react";
import styled, { css } from "styled-components";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
import omit from "lodash/omit";
import moment from "moment";
import { isInclusivelyAfterDay } from "./helpers";
import "./react_dates_overrides.css";
import arrow from "./arrowRight.svg";

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
  color: #383838;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;

  color: ${props => (props.isOpen ? "#fff" : "#383838")};
  background: ${props => (props.isOpen ? "#008489" : "transparent")};
`;

const Filter = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  background: #fff;
  z-index: 5;

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
  height: 48px;
  padding: 0 8px;

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

const Cancel = styled.button`
  width: 110px;
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

const DatesRange = styled.div`
  padding: 8px;
  padding-top: 30px;
  text-align: left;

  @media (min-width: 576px) {
    display: none;
  }
`;

const Arrow = styled.span`
  display: inline-block;
  margin: 0 16px;
  width: 18px;
  height: 11px;
  background: url(${arrow}) no-repeat center;
  background-size: contain;
`;

const StartDate = styled.span`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;

  color: ${props => (props.startDate ? "#636363" : "#0f7276")};
  border-bottom: ${props => (props.startDate ? "none" : "1px solid #008489")};
`;

const EndDate = styled.span`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;

  color: ${props => (props.startDate ? "#0f7276" : "#636363")};
  border-bottom: ${props => (props.startDate ? "1px solid #008489" : "none")};
`;

const Bottom = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  height: 64px;
  padding: 8px;
  box-shadow: 0 -1px #d5d5d5;
  z-index: 2;
  background: #fff;

  @media (min-width: 576px) {
    padding: 0;
    box-shadow: none;
    z-index: 1;
    background: transparent;
  }
`;

const CalendarRow = styled.div`
  position: relative;
  top: -12px;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  height: 48px;
  padding: 8px;
`;

const Save = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  font-weight: Bold;
  color: #fff;
  background: #ff5a5f;
  cursor: pointer;

  @media (min-width: 576px) {
    display: none;
  }
`;

const startDateToString = startDate => {
  return startDate && moment(startDate).format("Do MMM");
};

const endDateToString = endDate => {
  return endDate && moment(endDate).format("Do MMM");
};

const formatButtonDate = (startDate, endDate) => {
  const startDateString = startDateToString(startDate);
  const endDateString = endDateToString(endDate);

  return `${startDateString} — ${endDateString}`;
};

const formatDateLabel = (startDate, endDate, isOpen) => {
  if (startDate && endDate) return formatButtonDate(startDate, endDate);
  if (isOpen) return "Check in — Check out";
  return "Dates";
};

const numberOfMonths = () => {
  if (matchMedia("(min-width: 992px)").matches) return 2;
  if (matchMedia("(min-width: 576px)").matches) return 1;
  return 12;
};

const changeOrientation = () => {
  return matchMedia("(min-width: 576px)").matches
    ? "horizontal"
    : "verticalScrollable";
};

export default class Dates extends React.Component {
  state = {
    isOpen: false,
    isTouchDevice: true,
    focusedInput: this.props.autoFocusEndDate ? "startDate" : "endDate",
    startDate: this.props.initialStartDate,
    endDate: this.props.initialEndDate
  };

  onReset = () => {
    this.setState({ startDate: null, endDate: null });
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  onFocusChange = focusedInput => {
    this.setState({
      focusedInput: !focusedInput ? "startDate" : focusedInput
    });
  };

  toggleOpening = ({ isOpen }) => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  renderCalendarInfo = () => {
    return (
      <CalendarRow>
        {this.state.startDate && this.state.endDate ? (
          <Cancel onClick={this.onReset}>Reset</Cancel>
        ) : (
          <Cancel onClick={this.toggleOpening}>Cancel</Cancel>
        )}
        <Apply onClick={this.onSave}>Apply</Apply>
      </CalendarRow>
    );
  };

  render() {
    const {
      isOpen,
      startDate,
      endDate,
      isTouchDevice,
      focusedInput
    } = this.state;

    return (
      <React.Fragment>
        <Btn isOpen={isOpen} onClick={this.toggleOpening}>
          {formatDateLabel(
            this.state.startDate,
            this.state.endDate,
            this.state.isOpen
          )}
          {isOpen ? (
            <Filter isOpen={isOpen}>
              <Header>
                <Exit />
                <Caption>Dates</Caption>
                <Reset onClick={this.onReset}>Reset</Reset>
              </Header>
              <DatesRange>
                <StartDate startDate={startDate}>
                  {startDate ? this.startDateToString : "Check-in"}
                </StartDate>
                <Arrow />
                <EndDate endDate={endDate} startDate={startDate}>
                  {endDate ? this.endDateToString : "Check-out"}
                </EndDate>
              </DatesRange>
              <DayPicker
                numberOfMonths={numberOfMonths()}
                isTouchDevice={isTouchDevice}
                isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
                hideKeyboardShortcutsPanel
                isOpen={isOpen}
                renderCalendarInfo={this.renderCalendarInfo}
                onDatesChange={this.onDatesChange}
                onFocusChange={this.onFocusChange}
                focusedInput={focusedInput}
                startDate={startDate}
                endDate={endDate}
                orientation={changeOrientation()}
              />
              <Bottom>
                <Save onClick={this.props.onSave}>Save</Save>
              </Bottom>
            </Filter>
          ) : null}
        </Btn>
        {isOpen ? <Overlay onClick={this.toggleOpening} /> : null}
      </React.Fragment>
    );
  }
}
