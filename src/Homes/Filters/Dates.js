import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import styled from 'styled-components';
import ScrollLock from 'react-scrolllock';
import 'react-dates/lib/css/_datepicker.css';
import { START_DATE } from 'react-dates/constants';
import { DayPickerRangeController } from 'react-dates';

import './react_dates_overrides.css';
import isInclusivelyAfterDay from './helpers';
import {
  Apply,
  Arrow,
  Btn,
  Bottom,
  Cancel,
  Caption,
  CalendarRow,
  DatesRange,
  EndDate,
  Exit,
  Header,
  Overlay,
  Reset,
  Save,
  StartDate,
  Wrap,
} from './styled';

const DayPicker = styled(DayPickerRangeController)`
  position: relative;
  padding-bottom: 72px;
`;

const Filter = styled.aside`
  display: inline-block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 600;
  background-color: #fff;

  @media (min-width: 576px) {
    position: absolute;
    top: 40px;
  }
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
    isApply: false,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.onDatesChange({ startDate, endDate });
  };

  onFocusChange = (focusedInput) => {
    this.setState({
      focusedInput: !focusedInput ? START_DATE : focusedInput,
    });
  };

  onApply = () => {
    if (this.props.startDate && this.props.endDate) {
      this.setState({ isApply: true });
    }
    this.switchOpeningFilter();
  };

  switchOpeningFilter = () => {
    this.props.switchOpeningFilter(this.props.id);
  };

  resetSelection = () => {
    this.setState({ isApply: false });
    this.props.resetSelection(this.props.id);
  };

  renderCalendarInfo = () => (
    <CalendarRow>
      {this.props.startDate && this.props.endDate ? (
        <Cancel onClick={this.resetSelection}>Reset</Cancel>
      ) : (
        <Cancel onClick={this.props.onClose}>Cancel</Cancel>
      )}
      <Apply onClick={this.onApply}>Apply</Apply>
    </CalendarRow>
  );

  render() {
    const {
      startDate, endDate, openedFilter, id,
    } = this.props;
    const { focusedInput, isApply } = this.state;
    const filterLabel = this.props.children;
    const isOpen = openedFilter === id;

    return (
      <React.Fragment>
        <Wrap>
          <Btn isOpen={isApply || isOpen} onClick={this.switchOpeningFilter}>
            {formatDateLabel(startDate, endDate, isOpen, filterLabel)}
          </Btn>
          {isOpen && (
            <Filter isOpen={isOpen}>
              <Header>
                <Exit onClick={this.props.onClose} />
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
          {ShowOverlay(isOpen, this.props.onClose)}
          {ShowScrollLock(isOpen)}
        </Wrap>
      </React.Fragment>
    );
  }
}
