import React from 'react';
import Rheostat from 'rheostat';
import 'rheostat/css/slider.css';
import styled from 'styled-components';
import 'rheostat/css/slider-horizontal.css';

import './react_rheostat_overrides.css';

const Apply = styled.button`
  display: none;
  border: none;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  color: #008489;
  background: transparent;
  cursor: pointer;

  @media (min-width: 576px) {
    display: inline-block;
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

const Bottom = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  box-shadow: 0 -1px #d5d5d5;

  @media (min-width: 576px) {
    padding: 26px;
    box-shadow: none;
  }
`;

const Cancel = styled.button`
  display: none;
  border: none;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  color: #636363;
  background: transparent;
  cursor: pointer;

  @media (min-width: 576px) {
    display: inline-block;
  }
`;

const Column = styled.span`
  position: relative;
  bottom: -6px;
  display: inline-block;
  width: 6px;
  height: ${props => `${props.height}px`};
  background: rgba(118, 118, 118, 0.5);
`;

const Description = styled.p`
  margin: 0;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 14px;
  font-weight: 100;
  color: #383838;
`;

const Filter = styled.aside`
  display: inline-block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 3;

  @media (min-width: 576px) {
    position: absolute;
    top: 40px;
    left: 0;
    width: 326px;
    height: 274px;
    padding: 24px 16px;
    border: 1px solid rgba(72, 72, 72, 0.2);
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(72, 72, 72, 0.08);
  }
`;

const Histogram = styled.div`
  position: relative;
  margin-top: 32px;
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

const Title = styled.p`
  margin: 0;
  margin-bottom: 7px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 100;
  color: #383838;
`;

const Wrap = styled.div`
  position: relative;
  display: inline-block;
`;

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
