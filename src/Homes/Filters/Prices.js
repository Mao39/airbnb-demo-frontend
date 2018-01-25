import React from 'react';
import styled from 'styled-components';
import Rheostat from 'rheostat';
import 'rheostat/css/slider.css';
import 'rheostat/css/slider-horizontal.css';
import './react_rheostat_overrides.css';

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

const Wrap = styled.div`
  position: relative;
  display: inline-block;
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

const Description = styled.p`
  margin: 0;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 14px;
  font-weight: 100;
  color: #383838;
`;

const Histogram = styled.div`
  position: relative;
  margin-top: 32px;
`;

const Column = styled.span`
  position: relative;
  bottom: -6px;
  display: inline-block;
  width: 6px;
  height: ${props => `${props.height}px`};
  background: rgba(118, 118, 118, 0.5);
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

const Columns = props => (
  <React.Fragment>{props.height.map(value => <Column height={value} />)}</React.Fragment>
);

const formatPricesLabel = filterLabel => filterLabel;

const formatTitle = (min, max) => `$${min} — $${max}${max >= 10000 ? '+' : ''}`;

const ShowOverlay = (isOpen, onCloseFilter) => isOpen && <Overlay onClick={onCloseFilter} />;

export default class Prices extends React.Component {
  state = {
    min: 10,
    max: 10000,
  };

  onCloseFilter = () => {
    this.resetSelection();
    this.props.onCloseFilter();
  };

  resetSelection = () => {
    this.setState({
      min: 10,
      max: 10000,
    });
  };

  switchOpeningFilter = () => {
    this.props.switchOpeningFilter(this.props.children);
  };

  updateValue = (sliderState) => {
    this.setState({
      min: sliderState.values[0],
      max: sliderState.values[1],
    });
  };

  render() {
    const filterLabel = this.props.children;
    const { min, max } = this.state;
    const isOpen = this.props.openedFilter === filterLabel;
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

    return (
      <React.Fragment>
        <Wrap>
          <Btn isOpen={isOpen} onClick={this.switchOpeningFilter}>
            {formatPricesLabel(filterLabel)}
          </Btn>
          {isOpen && (
            <Filter>
              <Title>{formatTitle(min, max)}</Title>
              <Description>The average nightly price is $75.</Description>
              <Histogram>
                <Columns height={numberRoomOffers} />
                <Rheostat
                  onValuesUpdated={this.updateValue}
                  min={10}
                  max={10000}
                  values={[min, max]}
                />
              </Histogram>
              <Bottom>
                {min > 10 || max < 10000 ? (
                  <Cancel onClick={this.resetSelection}>Reset</Cancel>
                ) : (
                  <Cancel onClick={this.onCloseFilter}>Cancel</Cancel>
                )}
                <Apply onClick={this.switchOpeningFilter}>Apply</Apply>
              </Bottom>
            </Filter>
          )}
          {ShowOverlay(isOpen, this.onCloseFilter)}
        </Wrap>
      </React.Fragment>
    );
  }
}
