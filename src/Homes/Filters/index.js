import React from 'react';
import styled from 'styled-components';
import { ResponsiveComponent } from 'react-responsive-component';
import Dates from './Dates';
import Guests from './Guests';
import Rooms from './Rooms';
import Prices from './Prices';
import Book from './Book';
import More from './More';

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

const initialState = {
  openedFilter: null,
  dates: { startDate: null, endDate: null },
};

export default class Filters extends React.Component {
  state = initialState;

  onClose = () => {
    this.resetSelection();
    this.setState({ openedFilter: null });
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ dates: { startDate, endDate } });
  };

  resetSelection = (id) => {
    this.setState({ ...this.state, [id]: initialState[id] });
  };

  switchOpeningFilter = (id) => {
    if (this.state.openedFilter === id) {
      this.setState({ openedFilter: null });
    } else {
      this.setState({ openedFilter: id });
    }
  };

  render() {
    const { dates } = this.state;
    return (
      <FiltersWrap>
        <div className="container">
          <Dates
            id="dates"
            startDate={dates.startDate}
            endDate={dates.endDate}
            onClose={this.onClose}
            onDatesChange={this.onDatesChange}
            openedFilter={this.state.openedFilter}
            switchOpeningFilter={this.switchOpeningFilter}
            resetSelection={this.resetSelection}
          >
            Dates
          </Dates>
          <Guests
            id="guests"
            onClose={this.onClose}
            openedFilter={this.state.openedFilter}
            switchOpeningFilter={this.switchOpeningFilter}
          >
            Guests
          </Guests>
          <ResponsiveComponent query="only screen and (min-width: 968px)">
            <Rooms
              id="rooms"
              onClose={this.onClose}
              openedFilter={this.state.openedFilter}
              switchOpeningFilter={this.switchOpeningFilter}
            >
              Room type
            </Rooms>
            <Prices
              id="prices"
              onClose={this.onClose}
              openedFilter={this.state.openedFilter}
              switchOpeningFilter={this.switchOpeningFilter}
            >
              Prices
            </Prices>
            <Book
              id="instant"
              onClose={this.onClose}
              openedFilter={this.state.openedFilter}
              switchOpeningFilter={this.switchOpeningFilter}
            >
              Instant book
            </Book>
            <More
              id="more"
              onClose={this.onClose}
              openedFilter={this.state.openedFilter}
              switchOpeningFilter={this.switchOpeningFilter}
            >
              More filters
            </More>
          </ResponsiveComponent>
        </div>
      </FiltersWrap>
    );
  }
}
