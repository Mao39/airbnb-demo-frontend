import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import styled from 'styled-components';
import ScrollLock from 'react-scrolllock';
import 'react-dates/lib/css/_datepicker.css';
import { START_DATE } from 'react-dates/constants';
import { DayPickerRangeController } from 'react-dates';

import './react_dates_overrides.css';
import arrow from './arrowRight.svg';
import cross from '../../UI/cross.svg';
import isInclusivelyAfterDay from './helpers';

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

const Arrow = styled.span`
  display: inline-block;
  margin: 0 16px;
  width: 18px;
  height: 11px;
  background: url(${arrow}) no-repeat center;
  background-size: contain;
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

  color: ${props => (props.isOpen ? '#fff' : '#383838')};
  background: ${props => (props.isOpen ? '#008489' : 'transparent')};

  &:hover {
    border-color: ${props => (props.isOpen ? 'rgba(72, 72, 72, 0.3)' : '#f2f2f2')};
    background: ${props => (props.isOpen ? '#008489' : '#f2f2f2')};
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

const Caption = styled.span`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: #383838;
`;

const DatesRange = styled.div`
  padding: 8px;
  padding-top: 30px;
  text-align: left;

  @media (min-width: 576px) {
    display: none;
  }
`;

const DayPicker = styled(DayPickerRangeController)`
  position: relative;
  padding-bottom: 72px;
`;

const EndDate = styled.span`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;

  color: ${props => (props.startDate ? '#0f7276' : '#636363')};
  border-bottom: ${props => (props.startDate ? '1px solid #008489' : 'none')};
`;

const Exit = styled.button`
  width: 16px;
  height: 16px;
  background: url(${cross}) no-repeat center;
  background-size: contain;
  border: none;
  cursor: pointer;
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

const Overlay = styled.div`
  position: fixed;
  top: 137px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: rgba(255, 255, 255, 0.8);
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

const StartDate = styled.span`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;

  color: ${props => (props.startDate ? '#636363' : '#0f7276')};
  border-bottom: ${props => (props.startDate ? 'none' : '1px solid #008489')};
`;

const Wrap = styled.div`
  position: relative;
  display: inline-block;
`;

const formatStartDate = startDate => startDate && moment(startDate).format('Do MMM');

const formatEndDate = endDate => endDate && moment(endDate).format('Do MMM');

const formatButtonDate = (startDate, endDate) => {
  if (startDate && endDate) return `${formatStartDate(startDate)} — ${formatEndDate(endDate)}`;
  return `${formatStartDate(startDate)} — Check out`;
};

const formatDateLabel = (startDate, endDate, isOpen, filterLabel) => {
  if (startDate && endDate) return formatButtonDate(startDate, endDate);
  if (startDate) return formatButtonDate(startDate);
  if (isOpen) return 'Check in — Check out';
  return filterLabel;
};

const showNumberMonths = () => {
  if (matchMedia('(min-width: 992px)').matches) return 2;
  if (matchMedia('(min-width: 576px)').matches) return 1;
  return 12;
};

const changeOrientation = () =>
  (matchMedia('(min-width: 576px)').matches ? 'horizontal' : 'verticalScrollable');

const ShowOverlay = (isOpen, onClose) => isOpen && <Overlay onClick={onClose} />;

const ShowScrollLock = isOpen =>
  !matchMedia('(min-width: 576px)').matches && isOpen && <ScrollLock />;

const getUnavailableDays = day => !isInclusivelyAfterDay(day, moment());

export default class Dates extends React.Component {
  state = {
    focusedInput: START_DATE,
    startDate: this.props.initialStartDate,
    endDate: this.props.initialEndDate,
    isApply: false,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  onFocusChange = (focusedInput) => {
    this.setState({
      focusedInput: !focusedInput ? START_DATE : focusedInput,
    });
  };

  onClose = () => {
    this.resetSelection();
    this.props.onClose();
  };

  onApply = () => {
    this.setState({ isApply: true });
    this.switchOpeningFilter();
  };

  switchOpeningFilter = () => {
    this.props.switchOpeningFilter(this.props.children);
  };

  resetSelection = () => {
    this.setState({ isApply: false });
    this.setState({ startDate: null, endDate: null });
  };

  renderCalendarInfo = () => (
    <CalendarRow>
      {this.state.startDate && this.state.endDate ? (
        <Cancel onClick={this.resetSelection}>Reset</Cancel>
      ) : (
        <Cancel onClick={this.onClose}>Cancel</Cancel>
      )}
      <Apply onClick={this.onApply}>Apply</Apply>
    </CalendarRow>
  );

  render() {
    const {
      startDate, endDate, focusedInput, isApply,
    } = this.state;
    const filterLabel = this.props.children;
    const isOpen = this.props.openedFilter === filterLabel;

    return (
      <React.Fragment>
        <Wrap>
          <Btn isOpen={isApply || isOpen} onClick={this.switchOpeningFilter}>
            {formatDateLabel(startDate, endDate, isOpen, filterLabel)}
          </Btn>
          {isOpen && (
            <Filter isOpen={isOpen}>
              <Header>
                <Exit onClick={this.onClose} />
                <Caption>Dates</Caption>
                <Reset onClick={this.resetSelection}>Reset</Reset>
              </Header>
              <DatesRange>
                <StartDate startDate={startDate}>
                  {startDate ? formatStartDate(startDate) : 'Check-in'}
                </StartDate>
                <Arrow />
                <EndDate endDate={endDate} startDate={startDate}>
                  {endDate ? formatEndDate(endDate) : 'Check-out'}
                </EndDate>
              </DatesRange>
              <DayPicker
                numberOfMonths={showNumberMonths()}
                isOutsideRange={getUnavailableDays}
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
                <Save onClick={this.onApply}>Save</Save>
              </Bottom>
            </Filter>
          )}
          {ShowOverlay(isOpen, this.onClose)}
          {ShowScrollLock(isOpen)}
        </Wrap>
      </React.Fragment>
    );
  }
}
