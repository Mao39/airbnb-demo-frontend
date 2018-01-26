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
  guests: {
    adults: 1,
    babies: 0,
    infants: 0,
  },
  rooms: {
    entire: null,
    full: null,
    shared: null,
  },
  prices: {
    min: 10,
    max: 1000,
  },
};

export default class Filters extends React.Component {
  state = initialState;

  onClose = () => {
    this.resetSelection();
    this.setState({ openedFilter: null });
  };

  onCheckRoom = (type) => {
    this.setState(prevState => ({
      rooms: { ...this.state.rooms, [type]: !prevState.rooms[type] },
    }));
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

  addGuest = (type) => {
    this.setState(prevState => ({
      guests: {
        ...this.state.guests,
        [type]: prevState.guests[type] + 1,
      },
    }));
  };

  reduceGuest = (type) => {
    if (this.state.guests[type] > 1) {
      this.setState(prevState => ({
        guests: { ...this.state.guests, [type]: prevState.guests[type] - 1 },
      }));
    } else if (this.state.guests[type] > 0 && type !== 'adults') {
      this.setState(prevState => ({
        guests: { ...this.state.guests, [type]: prevState.guests[type] - 1 },
      }));
    }
  };

  updateValuePrices = (sliderState) => {
    this.setState({
      prices: {
        min: sliderState.values[0],
        max: sliderState.values[1],
      },
    });
  };

  render() {
    const {
      dates, guests, rooms, prices,
    } = this.state;
    return (
      <FiltersWrap>
        <div className="container">
          <Dates
            id="dates"
            onClose={this.onClose}
            endDate={dates.endDate}
            startDate={dates.startDate}
            onDatesChange={this.onDatesChange}
            resetSelection={this.resetSelection}
            openedFilter={this.state.openedFilter}
            switchOpeningFilter={this.switchOpeningFilter}
          >
            Dates
          </Dates>
          <Guests
            id="guests"
            adults={guests.adults}
            babies={guests.babies}
            onClose={this.onClose}
            infants={guests.infants}
            addGuest={this.addGuest}
            reduceGuest={this.reduceGuest}
            resetSelection={this.resetSelection}
            openedFilter={this.state.openedFilter}
            switchOpeningFilter={this.switchOpeningFilter}
          >
            Guests
          </Guests>
          <ResponsiveComponent query="only screen and (min-width: 968px)">
            <Rooms
              id="rooms"
              full={rooms.full}
              entire={rooms.entire}
              shared={rooms.shared}
              onClose={this.onClose}
              onCheckRoom={this.onCheckRoom}
              resetSelection={this.resetSelection}
              openedFilter={this.state.openedFilter}
              switchOpeningFilter={this.switchOpeningFilter}
            >
              Room type
            </Rooms>
            <Prices
              id="prices"
              min={prices.min}
              max={prices.max}
              onClose={this.onClose}
              resetSelection={this.resetSelection}
              openedFilter={this.state.openedFilter}
              updateValuePrices={this.updateValuePrices}
              switchOpeningFilter={this.switchOpeningFilter}
            >
              Prices
            </Prices>
            <Book
              id="instant"
              onClose={this.onClose}
              resetSelection={this.resetSelection}
              openedFilter={this.state.openedFilter}
              switchOpeningFilter={this.switchOpeningFilter}
            >
              Instant book
            </Book>
            <More
              id="more"
              onClose={this.onClose}
              resetSelection={this.resetSelection}
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
