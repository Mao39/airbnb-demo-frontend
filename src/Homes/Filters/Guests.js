import React from 'react';
import styled from 'styled-components';
import ScrollLock from 'react-scrolllock';
import cross from '../../UI/cross.svg';
import minus from '../../UI/minus.svg';
import plus from '../../UI/plus.svg';

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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  height: 48px;
  padding: 0 8px;
  box-shadow: 0 0.5px rgba(72, 72, 72, 0.3);

  @media (min-width: 576px) {
    display: none;
  }
`;

const Caption = styled.span`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: #383838;
`;

const Exit = styled.button`
  width: 16px;
  height: 16px;
  background: url(${cross}) no-repeat center;
  background-size: contain;
  border: none;
  cursor: pointer;
`;

const Reset = styled.button`
  padding: 0;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: #0f7276;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const People = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 0 8px;
`;

const Type = styled.span`
  display: flex;
  flex-direction: column;
`;

const Man = styled.span`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  font-weight: 600;
  color: #383838;
  text-transform: capitalize;
`;

const Age = styled.span`
  margin-top: 6px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: lighter;
  color: #383838;
`;

const Control = styled.div`
  display: flex;
  align-items: center;
`;

const Remove = styled.button`
  position: relative;
  width: 32px;
  height: 32px;
  border: 1px solid #008489;
  border-radius: 50%;
  background: url(${minus}) no-repeat center;
  background-size: 10px 2px;

  opacity: ${props => (props.disabled ? '.5' : '1')};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`;

const Add = styled.button`
  position: relative;
  width: 32px;
  height: 32px;
  border: 1px solid #008489;
  border-radius: 50%;
  background: url(${plus}) no-repeat center;
  background-size: 10px 10px;
  cursor: pointer;
`;

const Amount = styled.span`
  margin-right: 18px;
  margin-left: 18px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  font-weight: lighter;
  color: #383838;
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

const Save = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  font-weight: Bold;
  color: #fff;
  background: #ff5a5f;
  cursor: pointer;

  @media (min-width: 576px) {
    display: none;
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

const formatGuestsLabel = (isOpen, filterLabel, adults, children, infants) => {
  const commonNumber = adults + children;
  const formatInfants = infants > 1 ? `${infants} infants` : `${infants} infant`;
  const formatAdults = commonNumber > 1 ? `${commonNumber} guests` : `${commonNumber} guest`;

  if (commonNumber + infants > 1) {
    if (infants > 0) return `${formatAdults}, ${formatInfants}`;
    return `${formatAdults}`;
  }

  return filterLabel;
};

const ShowOverlay = (isOpen, onCloseFilter) => isOpen && <Overlay onClick={onCloseFilter} />;

const ShowScrollLock = isOpen =>
  !matchMedia('(min-width: 576px)').matches && isOpen && <ScrollLock />;

const Guest = props => (
  <People>
    <Type>
      <Man>{props.type}</Man>
      <Age>{props.age}</Age>
    </Type>
    <Control>
      <Remove
        onClick={() => props.reduce(props.type)}
        disabled={props.switchDisableButton(props.type)}
      />
      <Amount>{props.amount}</Amount>
      <Add onClick={() => props.add(props.type)} />
    </Control>
  </People>
);

export default class Guests extends React.Component {
  state = {
    adults: 1,
    children: 0,
    infants: 0,
  };

  onCloseFilter = () => {
    this.resetSelection();
    this.props.onCloseFilter();
  };

  resetSelection = () => {
    this.setState({ adults: 1, children: 0, infants: 0 });
  };

  switchOpeningFilter = () => {
    this.props.switchOpeningFilter(this.props.children);
  };

  switchDisableButton = (type) => {
    if (this.state[type] > 1) return false;
    if (this.state[type] > 0 && type !== 'adults') return false;
    return true;
  };

  reduce = (type) => {
    if (this.state[type] > 1) {
      this.setState(prevState => ({ [type]: prevState[type] - 1 }));
    } else if (this.state[type] > 0 && type !== 'adults') {
      this.setState(prevState => ({ [type]: prevState[type] - 1 }));
    }
  };

  add = (type) => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const { adults, children, infants } = this.state;
    const filterLabel = this.props.children;
    const isOpen = this.props.openedFilter === filterLabel;

    return (
      <React.Fragment>
        <Wrap>
          <Btn isOpen={isOpen} onClick={this.switchOpeningFilter}>
            {formatGuestsLabel(isOpen, filterLabel, adults, children, infants)}
          </Btn>
          {isOpen && (
            <Filter>
              <Header>
                <Exit onClick={this.onCloseFilter} />
                <Caption>Guests</Caption>
                <Reset onClick={this.resetSelection}>Reset</Reset>
              </Header>
              <Guest
                type="adults"
                amount={adults}
                add={this.add}
                reduce={this.reduce}
                switchDisableButton={this.switchDisableButton}
              />
              <Guest
                type="children"
                age="Ages 2 — 12"
                amount={children}
                add={this.add}
                reduce={this.reduce}
                switchDisableButton={this.switchDisableButton}
              />
              <Guest
                type="infants"
                age="Under 2"
                amount={infants}
                add={this.add}
                reduce={this.reduce}
                switchDisableButton={this.switchDisableButton}
              />
              <Bottom>
                <Save onClick={this.switchOpeningFilter}>Save</Save>
                <Cancel onClick={this.onCloseFilter}>Cancel</Cancel>
                <Apply onClick={this.switchOpeningFilter}>Apply</Apply>
              </Bottom>
            </Filter>
          )}
          {ShowOverlay(isOpen, this.onCloseFilter)}
          {ShowScrollLock(isOpen)}
        </Wrap>
      </React.Fragment>
    );
  }
}
