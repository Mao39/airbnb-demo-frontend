import React from 'react';
import styled from 'styled-components';
import plus from './../../UI/grayPlus.svg';
import check from './../../UI/checkBook.svg';

const Filter = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
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
    height: 168px;
    width: 326px;
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

const Label = styled.label`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Title = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  font-weight: 600;
  color: #383838;
`;

const Description = styled.p`
  margin: 0;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 100;
  color: #383838;
`;

const Switch = styled.button`
  position: relative;
  margin-top: 14px;
  padding: 20px 32px;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 24px;
  background: ${props => (props.check ? '#008489' : 'rgba(72, 72, 72, 0.08)')};
  transition: background-color 0.25s ease-in-out;
  cursor: pointer;

  &:focus {
    outline: none !important;
    box-shadow: 0 0 2px 2px #008489;
  }
`;

const Mark = styled.span`
  position: absolute;
  top: -1px;
  left: -1px;
  padding: 20px;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 50%;
  background: #fff;
  transform: ${props => props.check && 'translateX(24px)'};
  transition: all 0.3s ease-in-out 0.1s;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${props => props.check && `url(${check}) no-repeat center`};
    opacity: ${props => (props.check ? '1' : '0')};
    transition: opacity 0.15s ease-in-out 0.2s;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(${plus}) no-repeat center;
    transform: ${props => (props.check ? 'rotate(45deg)' : 'none')};
    opacity: ${props => (props.check ? '0' : '1')};
    transition: all 0.2s ease-out 0.1s;
  }
`;

const Input = styled.input``;

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
  state = {
    instant: false,
    isApply: false,
  };

  onCloseFilter = () => {
    this.resetSelection();
    this.props.onCloseFilter();
  };

  onCheck = () => {
    this.setState(prevState => ({ instant: !prevState.instant }));
  };

  onApply = () => {
    this.setState({ isApply: true });
    this.switchOpeningFilter();
  };

  resetSelection = () => {
    this.setState({ isApply: false });
    this.setState({ instant: false });
  };

  switchOpeningFilter = () => {
    this.props.switchOpeningFilter(this.props.children);
  };

  render() {
    const { instant, isApply } = this.state;
    const filterLabel = this.props.children;
    const isOpen = this.props.openedFilter === filterLabel;

    return (
      <React.Fragment>
        <Wrap>
          <Btn isOpen={isApply || isOpen} onClick={this.switchOpeningFilter}>
            {formatPricesLabel(filterLabel)}
          </Btn>
          {isOpen && (
            <Filter>
              <Label for="instant" onClick={this.onCheck}>
                <Title>{filterLabel}</Title>
                <Description>Listings you can book without waiting for host approval.</Description>
              </Label>
              <Switch onClick={this.onCheck} check={instant}>
                <Mark check={instant} />
                <Input id="instant" type="hidden" value={filterLabel} />
              </Switch>
              <Bottom>
                {instant ? (
                  <Cancel onClick={this.resetSelection}>Reset</Cancel>
                ) : (
                  <Cancel onClick={this.onCloseFilter}>Cancel</Cancel>
                )}
                <Apply onClick={this.onApply}>Apply</Apply>
              </Bottom>
            </Filter>
          )}
          {ShowOverlay(isOpen, this.onCloseFilter)}
        </Wrap>
      </React.Fragment>
    );
  }
}
