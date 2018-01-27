import React from 'react';
import Rheostat from 'rheostat';
import 'rheostat/css/slider.css';
import 'rheostat/css/slider-horizontal.css';

import './react_rheostat_overrides.css';
import {
  Apply,
  Btn,
  Bottom,
  Cancel,
  Column,
  Description,
  Filter,
  Histogram,
  Overlay,
  Title,
  Wrap,
} from './styled';

const formatLabel = (filterLabel, min, max) => {
  if (min > 10 && max < 1000) return `$${min} — $${max}`;
  if (min > 10) return `After $${min}`;
  if (max < 1000) return `Before $${max}`;
  return filterLabel;
};

const formatTitle = (min, max) => `$${min} — $${max}${max >= 1000 ? '+' : ''}`;

const Columns = props => (
  <React.Fragment>{props.height.map(value => <Column height={value} />)}</React.Fragment>
);

const ShowOverlay = (isOpen, onClose) => isOpen && <Overlay onClick={onClose} />;

export default class Prices extends React.Component {
  state = {
    isApply: false,
  };

  onClose = () => {
    this.props.onClose(this.props.id);
  };

  onApply = () => {
    if (this.state.min > 10 || this.state.max < 1000) this.setState({ isApply: true });
    this.switchOpeningFilter();
  };

  resetSelection = () => {
    this.setState({ isApply: false });
    this.props.resetSelection(this.props.id);
  };

  switchOpeningFilter = () => {
    this.props.switchOpeningFilter(this.props.id);
  };

  render() {
    const filterLabel = this.props.children;
    const { isApply } = this.state;
    const {
      id, min, max, openedFilter, numberRoomOffers,
    } = this.props;
    const isOpen = openedFilter === id;

    return (
      <React.Fragment>
        <Wrap>
          <Btn isOpen={isApply || isOpen} onClick={this.switchOpeningFilter}>
            {formatLabel(filterLabel, min, max)}
          </Btn>
          {isOpen && (
            <Filter>
              <Title>{formatTitle(min, max)}</Title>
              <Description>The average nightly price is $75.</Description>
              <Histogram>
                <Columns height={numberRoomOffers} />
                <Rheostat
                  onValuesUpdated={this.props.updateValuePrices}
                  min={10}
                  max={1000}
                  values={[min, max]}
                />
              </Histogram>
              <Bottom>
                {min > 10 || max < 1000 ? (
                  <Cancel onClick={this.resetSelection}>Reset</Cancel>
                ) : (
                  <Cancel onClick={this.onClose}>Cancel</Cancel>
                )}
                <Apply onClick={this.onApply}>Apply</Apply>
              </Bottom>
            </Filter>
          )}
          {ShowOverlay(isOpen, this.onClose)}
        </Wrap>
      </React.Fragment>
    );
  }
}
