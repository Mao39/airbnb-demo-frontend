import React from 'react';
import styled from 'styled-components';
import Dates from './Dates';
import Guests from './Guests';
import Rooms from './Rooms';

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
          <Rooms
            onCloseFilter={this.onCloseFilter}
            openedFilter={this.state.openedFilter}
            switchOpeningFilter={this.switchOpeningFilter}
          >
            Room type
          </Rooms>
          <Btn>More filters</Btn>
        </div>
      </FiltersWrap>
    );
  }
}
