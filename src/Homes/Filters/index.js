import React from 'react';
import styled from 'styled-components';
import { ResponsiveComponent } from 'react-responsive-component';
import Dates from './Dates';
import Guests from './Guests';
import Rooms from './Rooms';
import Prices from './Prices';
import Book from './Book';

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

export default class Filters extends React.Component {
  state = {
    openedFilter: null,
  };

  onCloseFilter = () => {
    this.setState({ openedFilter: null });
  };

  switchOpeningFilter = (filterLabel) => {
    if (this.state.openedFilter === filterLabel) {
      this.setState({ openedFilter: null });
    } else {
      this.setState({ openedFilter: filterLabel });
    }
  };

  render() {
    return (
      <FiltersWrap>
        <div className="container">
          <Dates
            onCloseFilter={this.onCloseFilter}
            openedFilter={this.state.openedFilter}
            switchOpeningFilter={this.switchOpeningFilter}
          >
            Dates
          </Dates>
          <Guests
            onCloseFilter={this.onCloseFilter}
            openedFilter={this.state.openedFilter}
            switchOpeningFilter={this.switchOpeningFilter}
          >
            Guests
          </Guests>
          <ResponsiveComponent query="only screen and (min-width: 968px)">
            <Rooms
              onCloseFilter={this.onCloseFilter}
              openedFilter={this.state.openedFilter}
              switchOpeningFilter={this.switchOpeningFilter}
            >
              Room type
            </Rooms>
            <Prices
              onCloseFilter={this.onCloseFilter}
              openedFilter={this.state.openedFilter}
              switchOpeningFilter={this.switchOpeningFilter}
            >
              Prices
            </Prices>
            <Book
              onCloseFilter={this.onCloseFilter}
              openedFilter={this.state.openedFilter}
              switchOpeningFilter={this.switchOpeningFilter}
            >
              Instant book
            </Book>
          </ResponsiveComponent>
        </div>
      </FiltersWrap>
    );
  }
}
