import React from 'react';
import styled from 'styled-components';
import Rheostat from 'rheostat';
import 'rheostat/css/slider.css';

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
    height: 290px;
    width: 326px;
    padding: 32px 24px;
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

const formatPricesLabel = filterLabel => filterLabel;

const ShowOverlay = (isOpen, onCloseFilter) => isOpen && <Overlay onClick={onCloseFilter} />;

export default class Prices extends React.Component {
  state = {};

  onCloseFilter = () => {
    this.resetSelection();
    this.props.onCloseFilter();
  };

  resetSelection = () => {};

  switchOpeningFilter = () => {
    this.props.switchOpeningFilter(this.props.children);
  };

  PitComponent = ({ style, children }) => (
    <div
      style={{
        ...style,
        background: '#a2a2a2',
        width: 1,
        height: children % 10 === 0 ? 12 : 8,
        top: 20,
      }}
    />
  );

  render() {
    const filterLabel = this.props.children;
    const isOpen = this.props.openedFilter === filterLabel;
    const pitPoints = [
      0,
      5,
      10,
      15,
      20,
      25,
      30,
      35,
      40,
      45,
      50,
      55,
      60,
      65,
      70,
      75,
      80,
      85,
      90,
      95,
      100,
    ];

    return (
      <React.Fragment>
        <Wrap>
          <Btn isOpen={isOpen} onClick={this.switchOpeningFilter}>
            {formatPricesLabel(filterLabel)}
          </Btn>
          {isOpen && (
            <Filter>
              <Rheostat
                pitComponent={this.PitComponent}
                min={1}
                max={100}
                values={[1, 100]}
                pitPoints={pitPoints}
                snap
                snapPoints={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              />
              <Bottom>
                {isOpen ? (
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
