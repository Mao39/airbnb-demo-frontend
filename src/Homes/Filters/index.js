import React from 'react';
import { ResponsiveComponent } from 'react-responsive-component';

import Book from './Book';
import More from './More';
import Dates from './Dates';
import Rooms from './Rooms';
import Prices from './Prices';
import Guests from './Guests';
import { FiltersWrap } from './styled';

const numberRoomOffers = [
  0,
  0,
  0,
  0,
  0,
  3,
  6,
  14,
  20,
  14,
  32,
  42,
  56,
  69,
  79,
  60,
  60,
  56,
  42,
  42,
  35,
  32,
  20,
  10,
  14,
  20,
  6,
  1,
];

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
  moreOptions: {
    instantBook: false,
    superHost: false,
  },
  furnishings: {
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
  },
  amenties: {
    heating: false,
    tv: false,
    kitchen: false,
    wireless: false,
    fireplace: false,
    shampoo: false,
    iron: false,
    intercom: false,
    washer: false,
    isOpen: false,
  },
  facilities: {
    elebator: false,
    pool: false,
    parking: false,
    disability: false,
    bathhouse: false,
    garden: false,
    isOpen: false,
  },
};

export default class Filters extends React.Component {
  state = initialState;

  onClose = () => {
    this.resetSelection();
    this.setState({ openedFilter: null });
  };

  onCheckCheckbox = (checkbox, type) => {
    this.setState(prevState => ({
      [checkbox]: { ...this.state[checkbox], [type]: !prevState[checkbox][type] },
    }));
  };

  onCheckOption = (filter) => {
    this.setState(prevState => ({
      moreOptions: { ...this.state.moreOptions, [filter]: !prevState.moreOptions[filter] },
    }));
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ dates: { startDate, endDate } });
  };

  resetSelection = (id) => {
    this.setState({ ...this.state, [id]: initialState[id] });
    if (id === 'moreFilters') {
      this.setState({ ...initialState });
    }
  };

  switchOpeningFilter = (id) => {
    if (this.state.openedFilter === id) {
      this.setState({ openedFilter: null });
    } else {
      this.setState({ openedFilter: id });
    }
  };

  switchDisableReduce = (filter, type) => {
    if (this.state[filter][type] > 1) return false;
    if (this.state[filter][type] > 0) return false;
    return true;
  };

  switchOpeningDropdown = (dropdown) => {
    if (dropdown === 'amenties') {
      this.setState(prevState => ({
        amenties: { ...this.state.amenties, isOpen: !prevState.amenties.isOpen },
      }));
    } else {
      this.setState(prevState => ({
        facilities: { ...this.state.facilities, isOpen: !prevState.facilities.isOpen },
      }));
    }
  };

  addNumber = (filter, type) => {
    this.setState(prevState => ({
      [filter]: {
        ...this.state[filter],
        [type]: prevState[filter][type] + 1,
      },
    }));
  };

  reduceNumber = (filter, type) => {
    if (this.state[filter][type] > 1) {
      this.setState(prevState => ({
        [filter]: { ...this.state[filter], [type]: prevState[filter][type] - 1 },
      }));
    } else if (this.state[filter][type] > 0 && type !== 'adults') {
      this.setState(prevState => ({
        [filter]: { ...this.state[filter], [type]: prevState[filter][type] - 1 },
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
      dates,
      guests,
      rooms,
      prices,
      moreOptions,
      furnishings,
      amenties,
      facilities,
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
            addNumber={this.addNumber}
            reduceNumber={this.reduceNumber}
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
              resetSelection={this.resetSelection}
              onCheckCheckbox={this.onCheckCheckbox}
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
              numberRoomOffers={numberRoomOffers}
              resetSelection={this.resetSelection}
              openedFilter={this.state.openedFilter}
              updateValuePrices={this.updateValuePrices}
              switchOpeningFilter={this.switchOpeningFilter}
            >
              Prices
            </Prices>
            <Book
              id="moreOptions"
              onClose={this.onClose}
              onCheckOption={this.onCheckOption}
              resetSelection={this.resetSelection}
              instantBook={moreOptions.instantBook}
              openedFilter={this.state.openedFilter}
              switchOpeningFilter={this.switchOpeningFilter}
            >
              Instant book
            </Book>
          </ResponsiveComponent>
          <More
            id="moreFilters"
            rooms={rooms}
            prices={prices}
            amenties={amenties}
            onClose={this.onClose}
            facilities={facilities}
            moreOptions={moreOptions}
            furnishings={furnishings}
            addNumber={this.addNumber}
            reduceNumber={this.reduceNumber}
            onCheckOption={this.onCheckOption}
            numberRoomOffers={numberRoomOffers}
            resetSelection={this.resetSelection}
            onCheckCheckbox={this.onCheckCheckbox}
            openedFilter={this.state.openedFilter}
            updateValuePrices={this.updateValuePrices}
            switchDisableReduce={this.switchDisableReduce}
            switchOpeningFilter={this.switchOpeningFilter}
            switchOpeningDropdown={this.switchOpeningDropdown}
          >
            More filters
          </More>
        </div>
      </FiltersWrap>
    );
  }
}
