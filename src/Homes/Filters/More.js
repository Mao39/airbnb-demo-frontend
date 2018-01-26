import React from 'react';
import styled from 'styled-components';
import ScrollLock from 'react-scrolllock';
import Rheostat from 'rheostat';
import 'rheostat/css/slider.css';
import 'rheostat/css/slider-horizontal.css';
import './react_rheostat_overrides.css';
import cross from '../../UI/cross.svg';
import check from '../../UI/check.svg';
import checkBook from './../../UI/checkBook.svg';
import minus from '../../UI/minus.svg';
import plus from '../../UI/plus.svg';
import grayPlus from './../../UI/grayPlus.svg';

const Filter = styled.aside`
  display: inline-block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 3;
  overflow-y: scroll;

  @media (min-width: 576px) {
    top: 136px;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
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

const Topic = styled.p`
  margin: 0;
  margin-bottom: 24px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  font-weight: 600;
  color: #383838;
`;

const Section = styled.div`
  margin: 0 8px;
  margin-bottom: 32px;
  padding-bottom: 32px;
  box-shadow: 0 0.5px 0 rgba(72, 72, 72, 0.3);
`;

const Type = styled.div`
  margin-left: 12px;
  padding-right: 56px;
  text-align: left;
`;

const Title = styled.p`
  margin: 0;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: lighter;
  color: #383838;
`;

const Titul = styled(Title)`
  text-transform: capitalize;
`;

const Description = styled.p`
  margin: 0;
  margin-top: 4px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: lighter;
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
  width: 2%;
  height: ${props => `${props.height}px`};
  background: rgba(118, 118, 118, 0.5);
`;

const Input = styled.input`
  width: 24px;
  height: 24px;
  opacity: 0;
  cursor: pointer;
`;

const RoomType = styled.label`
  display: flex;
  margin-bottom: 14px;
  background: url(${props => props.imgSrc}) no-repeat center right;
  background-size: 32px;
  cursor: pointer;
`;

const Checkbox = styled.label`
  width: 24px;
  height: 24px;
  padding: 0;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 4px;
  background: ${props => (props.check ? '#008489' : 'transparent')};
  background-image: url(${check});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 13px 9px;
  cursor: pointer;
`;

const Bottom = styled.div`
  position: relative;
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

const Facility = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
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
    background: ${props => props.check && `url(${checkBook}) no-repeat center`};
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
    background: url(${grayPlus}) no-repeat center;
    transform: ${props => (props.check ? 'rotate(45deg)' : 'none')};
    opacity: ${props => (props.check ? '0' : '1')};
    transition: all 0.2s ease-out 0.1s;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Link = styled.a`
  margin-top: 4px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: lighter;
  color: #0f7276;
`;

const Option = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Dropout = styled.button`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  color: #0f7276;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const ShowOverlay = (isOpen, onClose) => isOpen && <Overlay onClick={onClose} />;

const ShowScrollLock = isOpen =>
  !matchMedia('(min-width: 576px)').matches && isOpen && <ScrollLock />;

const CheckRoom = props => (
  <RoomType for={props.type} onClick={() => props.onCheck(props.type)} imgSrc={props.imgSrc}>
    <Checkbox for={props.type} onClick={() => props.onCheck(props.type)} check={props.check}>
      <Input id={props.type} type="checkbox" value={props.type} />
    </Checkbox>
    <Type>
      <Title>{props.title}</Title>
      <Description>{props.desc}</Description>
    </Type>
  </RoomType>
);

const Columns = props => (
  <React.Fragment>{props.height.map(value => <Column height={value} />)}</React.Fragment>
);

const formatPricesTitle = (min, max) => `$${min} — $${max}${max >= 10000 ? '+' : ''}`;

const Facilities = props => (
  <Facility>
    <Titul>{props.type}</Titul>
    <Control>
      <Remove
        onClick={() => props.reduce(props.type)}
        disabled={props.switchDisableButton(props.type)}
      />
      <Amount>{props.amount}+</Amount>
      <Add onClick={() => props.add(props.type)} />
    </Control>
  </Facility>
);

export default class Guests extends React.Component {
  state = {
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
    entire: null,
    full: null,
    shared: null,
    min: 10,
    max: 10000,
    instant: false,
    superHost: false,
    isApply: false,
  };

  onClose = () => {
    this.resetSelection();
    this.props.onClose();
  };

  onCheckRoomType = (type) => {
    this.setState(prevState => ({ [type]: !prevState[type] }));
  };

  onCheckMoreOptions = () => {
    this.setState(prevState => ({ instant: !prevState.instant }));
  };

  onApply = () => {
    this.setState({ isApply: true });
    this.switchOpeningFilter();
  };

  resetSelection = () => {
    this.setState({ isApply: false });
    this.setState({ adults: 1, children: 0, infants: 0 });
  };

  switchOpeningFilter = () => {
    this.props.switchOpeningFilter(this.props.children);
  };

  switchDisableButton = (type) => {
    if (this.state[type] > 1) return false;
    if (this.state[type] > 0) return false;
    return true;
  };

  reduce = (type) => {
    if (this.state[type] > 0) {
      this.setState(prevState => ({ [type]: prevState[type] - 1 }));
    }
  };

  updateValue = (sliderState) => {
    this.setState({
      min: sliderState.values[0],
      max: sliderState.values[1],
    });
  };

  add = (type) => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const {
      entire,
      full,
      shared,
      min,
      max,
      bedrooms,
      beds,
      bathrooms,
      instant,
      superHost,
      isApply,
    } = this.state;
    const filterLabel = this.props.children;
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
        <Btn isOpen={isApply || isOpen} onClick={this.switchOpeningFilter}>
          {filterLabel}
        </Btn>
        {isOpen && (
          <Filter>
            <Header>
              <Exit onClick={this.onClose} />
              <Caption>All filters (0)</Caption>
              <Reset onClick={this.resetSelection}>Clear all</Reset>
            </Header>
            <Section>
              <Topic>Room type</Topic>
              <CheckRoom
                check={entire}
                onCheck={this.onCheckRoomType}
                type="entire"
                title="Entire home"
                desc="Have a place to yourself"
              />
              <CheckRoom
                check={full}
                onCheck={this.onCheckRoomType}
                type="full"
                title="Private room"
                desc="Have your own room and share some common spaces"
              />
              <CheckRoom
                check={shared}
                onCheck={this.onCheckRoomType}
                type="shared"
                title="Shared room"
                desc="Stay in a shared space, like a common room"
              />
            </Section>
            <Section>
              <Topic>Price range</Topic>
              <Title>{formatPricesTitle(min, max)}</Title>
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
            </Section>
            <Section>
              <Topic>Rooms and beds</Topic>
              <Facilities
                type="bedrooms"
                amount={bedrooms}
                add={this.add}
                reduce={this.reduce}
                switchDisableButton={this.switchDisableButton}
              />
              <Facilities
                type="beds"
                amount={beds}
                add={this.add}
                reduce={this.reduce}
                switchDisableButton={this.switchDisableButton}
              />
              <Facilities
                type="bathrooms"
                amount={bathrooms}
                add={this.add}
                reduce={this.reduce}
                switchDisableButton={this.switchDisableButton}
              />
            </Section>
            <Section>
              <Topic>More options</Topic>
              <Option>
                <Label for="instant" onClick={this.onCheckMoreOptions}>
                  <Title>Instant Book</Title>
                  <Description>Secure a reservation instantly.</Description>
                  <Link>Learn more</Link>
                </Label>
                <Switch onClick={this.onCheckMoreOptions} check={instant}>
                  <Mark check={instant} />
                  <Input id="instant" type="hidden" value={instant} />
                </Switch>
              </Option>
              <Option>
                <Label for="superHost" onClick={this.onCheckMoreOptions}>
                  <Title>Superhost</Title>
                  <Description>Stay with recognized hosts.</Description>
                  <Link>Learn more</Link>
                </Label>
                <Switch onClick={this.onCheckMoreOptions} check={superHost}>
                  <Mark check={superHost} />
                  <Input id="superHost" type="hidden" value={superHost} />
                </Switch>
              </Option>
            </Section>
            <Section>
              <Wrap>
                <Topic>Amenties</Topic>
                <Dropout>See all</Dropout>
              </Wrap>
            </Section>
            <Section>
              <Wrap>
                <Topic>Facilities</Topic>
                <Dropout>See all</Dropout>
              </Wrap>
            </Section>
            <Bottom>
              <Save onClick={this.onApply}>See homes</Save>
              {isApply ? (
                <Cancel onClick={this.resetSelection}>Reset</Cancel>
              ) : (
                <Cancel onClick={this.onClose}>Cancel</Cancel>
              )}
              <Apply onClick={this.onApply}>See homes</Apply>
            </Bottom>
          </Filter>
        )}
        {ShowOverlay(isOpen, this.onClose)}
        {ShowScrollLock(isOpen)}
      </React.Fragment>
    );
  }
}
