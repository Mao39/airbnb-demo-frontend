import React, { Component } from "react";
import styled, { css } from "styled-components";
import omit from "lodash/omit";
import moment from "moment";
import ScrollLock from "react-scrolllock";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./react_dates_overrides.css";
import { DayPickerRangeController } from "react-dates";
import { START_DATE } from "react-dates/constants";
import { isInclusivelyAfterDay } from "./helpers";
import cross from "../../UI/cross.svg";
import arrow from "./arrowRight.svg";

const DayPicker = styled(DayPickerRangeController)`
  position: relative;
  padding-bottom: 72px;
`;

const Wrap = styled.div`
  position: relative;
  display: inline-block;
`;

const Btn = styled.button`
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
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #383838;
  background: #fff;

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
    display: none;
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
  display: none;
  justify-content: space-between;
  padding-top: 40px;
  height: 48px;
  padding: 8px;

  @media (min-width: 576px) {
    display: flex;
  }
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

  &:hover {
    background: #f53d43;
  }

  &:active,
  &:focus {
    background: #ed262c;
  }

  @media (min-width: 576px) {
    display: none;
  }
`;

const formatStartDate = startDate => {
  return startDate && moment(startDate).format("Do MMM");
};

const formatEndDate = endDate => {
  return endDate && moment(endDate).format("Do MMM");
};

const formatButtonDate = (startDate, endDate) => {
  const startDateString = formatStartDate(startDate);
  const endDateString = formatEndDate(endDate);

  return `${startDateString} — ${endDateString}`;
};

const formatDateLabel = (startDate, endDate, isOpen) => {
  if (startDate && endDate) return formatButtonDate(startDate, endDate);
  if (isOpen) return "Check in — Check out";
  return "Dates";
};

const showNumberMonths = () => {
  if (matchMedia("(min-width: 992px)").matches) return 2;
  if (matchMedia("(min-width: 576px)").matches) return 1;
  return 12;
};

const changeOrientation = () => {
  return matchMedia("(min-width: 576px)").matches
    ? "horizontal"
    : "verticalScrollable";
};

const showScrollLock = isOpen => {
  return !matchMedia("(min-width: 576px)").matches && isOpen && <ScrollLock />;
};

const getUnavailableDaysReservation = day => {
  return !isInclusivelyAfterDay(day, moment());
};

export default class Dates extends React.Component {
  state = {
    isTouchDevice: true,
    focusedInput: START_DATE,
    startDate: this.props.initialStartDate,
    endDate: this.props.initialEndDate
  };

  resetSelection = () => {
    this.setState({ startDate: null, endDate: null });
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  onFocusChange = focusedInput => {
    this.setState({
      focusedInput: !focusedInput ? START_DATE : focusedInput
    });
  };

  switchOpeningFilter = () => {
    this.props.toggleDropdown(this.props.isOpen);
  };

  saveChoice = () => {
    this.props.saveChoice(this.state.startDate, this.state.endDate);

    this.state.startDate && this.state.endDate && this.switchOpeningFilter();
  };

  renderCalendarInfo = () => {
    return (
      <CalendarRow>
        {this.state.startDate && this.state.endDate ? (
          <Cancel onClick={this.resetSelection}>Reset</Cancel>
        ) : (
          <Cancel onClick={this.switchOpeningFilter}>Cancel</Cancel>
        )}
        <Apply onClick={this.saveChoice}>Apply</Apply>
      </CalendarRow>
    );
  };

  render() {
    const { startDate, endDate, isTouchDevice, focusedInput } = this.state;

    return (
      <React.Fragment>
        <Wrap>
          <Btn isOpen={this.props.isOpen} onClick={this.switchOpeningFilter}>
            {formatDateLabel(
              this.state.startDate,
              this.state.endDate,
              this.state.isOpen
            )}
          </Btn>
          {this.props.isOpen ? (
            <Filter isOpen={this.props.isOpen}>
              <Header>
                <Exit onClick={this.switchOpeningFilter} />
                <Caption>Dates</Caption>
                <Reset onClick={this.resetSelection}>Reset</Reset>
              </Header>
              <DatesRange>
                <StartDate startDate={startDate}>
                  {startDate ? formatStartDate(startDate) : "Check-in"}
                </StartDate>
                <Arrow />
                <EndDate endDate={endDate} startDate={startDate}>
                  {endDate ? formatEndDate(endDate) : "Check-out"}
                </EndDate>
              </DatesRange>
              <DayPicker
                numberOfMonths={showNumberMonths()}
                isTouchDevice={isTouchDevice}
                isOutsideRange={getUnavailableDaysReservation}
                hideKeyboardShortcutsPanel
                renderCalendarInfo={this.renderCalendarInfo}
                onDatesChange={this.onDatesChange}
                onFocusChange={this.onFocusChange}
                focusedInput={focusedInput}
                startDate={startDate}
                endDate={endDate}
                orientation={changeOrientation()}
              />
              <Bottom>
                <Save onClick={this.saveChoice}>Save</Save>
              </Bottom>
            </Filter>
          ) : null}
          {this.props.isOpen ? (
            <Overlay onClick={this.switchOpeningFilter} />
          ) : null}
          {showScrollLock(this.props.isOpen)}
        </Wrap>
      </React.Fragment>
    );
  }
}
