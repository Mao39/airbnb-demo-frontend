import React from 'react';
import styled from 'styled-components';
import ScrollLock from 'react-scrolllock';
import MediaQuery from 'react-responsive';
import Rheostat from 'rheostat';
import 'rheostat/css/slider.css';
import 'rheostat/css/slider-horizontal.css';
import './react_rheostat_overrides.css';

import fullRoom from '../../UI/private.svg';
import entireRoom from '../../UI/entire.svg';
import sharedRoom from '../../UI/shared.svg';
import {
  RoomType,
  Checkbox,
  Input,
  Type,
  Column,
  Facility,
  Control,
  Remove,
  Amount,
  Add,
  Option,
  Link,
  CheckboxWrap,
  Header,
  Exit,
  Caption,
  Closeout,
  Reset,
  Section,
  Topic,
  Histogram,
  Dropdown,
  Dropout,
  Save,
  Titul,
  Btn,
  Description,
  Mark,
  Overlay,
  Switch,
  Title,
} from './styled';

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
    padding-top: 38px;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
`;

const Cancel = styled.button`
  display: none;
  border: none;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  color: #383838;
  background: transparent;
  cursor: pointer;

  @media (min-width: 576px) {
    display: inline-block;
    margin-right: 8px;
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
    margin-left: 8px;
    padding: 12px 28px;
    border-radius: 4px;
    background-color: #008489;
    color: #fff;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
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
    padding: 8;
    box-shadow: none;
    justify-content: center;
  }

  @media (min-width: 968px) {
    justify-content: flex-end;
  }
`;

const ShowOverlay = (isOpen, onClose) => isOpen && <Overlay onClick={onClose} />;

const ShowScrollLock = isOpen => isOpen && <ScrollLock />;

const CheckRoom = props => (
  <RoomType for={props.type} imgSrc={props.imgSrc}>
    <Checkbox
      for={props.type}
      onClick={() => props.onCheckCheckbox(props.checkbox, props.type)}
      check={props.check}
    >
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

const formatPricesTitle = (min, max) => `$${min} — $${max}${max >= 1000 ? '+' : ''}`;

const Facilities = props => (
  <Facility>
    <Titul>{props.type}</Titul>
    <Control>
      <Remove
        onClick={() => props.reduceNumber(props.filter, props.type)}
        disabled={props.switchDisableReduce(props.filter, props.type)}
      />
      <Amount>{props.amount}+</Amount>
      <Add onClick={() => props.addNumber(props.filter, props.type)} />
    </Control>
  </Facility>
);

const Options = props => (
  <Option>
    <Label onClick={() => props.onCheckOption(props.filter)}>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <Link href="#">Learn more</Link>
    </Label>
    <Switch onClick={() => props.onCheckOption(props.filter)} check={props.check}>
      <Mark check={props.check} />
    </Switch>
  </Option>
);

const Checkboxs = props => (
  <CheckboxWrap for={props.type} active={props.active} visible={props.visible}>
    <Checkbox
      for={props.type}
      onClick={() => props.onCheckCheckbox(props.checkbox, props.type)}
      check={props.check}
    >
      <Input id={props.type} type="checkbox" value={props.type} />
    </Checkbox>
    <Type>
      <Title>{props.title}</Title>
    </Type>
  </CheckboxWrap>
);

export default class Guests extends React.Component {
  state = {
    isApply: false,
  };

  onClose = () => {
    this.setState({ isApply: false });
    this.props.onClose(this.props.id);
  };

  onApply = () => {
    if (
      this.props.prices !== this.props.initialState.prices ||
      this.props.rooms !== this.props.initialState.rooms ||
      this.props.furnishings !== this.props.initialState.furnishings ||
      this.props.amenties !== this.props.initialState.amenties ||
      this.props.facilities !== this.props.initialState.facilities
    ) {
      this.setState({ isApply: true });
    }
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
    const { isApply } = this.state;
    const {
      id,
      rooms,
      prices,
      amenties,
      facilities,
      moreOptions,
      furnishings,
      openedFilter,
      numberRoomOffers,
    } = this.props;
    const filterLabel = this.props.children;
    const isOpen = openedFilter === id;

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
            <div className="container">
              <MediaQuery maxWidth={968}>
                <Section>
                  <Topic>Room type</Topic>
                  <CheckRoom
                    check={rooms.entire}
                    onCheckCheckbox={this.props.onCheckCheckbox}
                    type="entire"
                    checkbox="rooms"
                    title="Entire home"
                    desc="Have a place to yourself"
                    imgSrc={entireRoom}
                  />
                  <CheckRoom
                    check={rooms.full}
                    onCheckCheckbox={this.props.onCheckCheckbox}
                    type="full"
                    checkbox="rooms"
                    title="Private room"
                    desc="Have your own room and share some common spaces"
                    imgSrc={fullRoom}
                  />
                  <CheckRoom
                    check={rooms.shared}
                    onCheckCheckbox={this.props.onCheckCheckbox}
                    type="shared"
                    checkbox="rooms"
                    title="Shared room"
                    desc="Stay in a shared space, like a common room"
                    imgSrc={sharedRoom}
                  />
                </Section>
                <Section>
                  <Topic>Price range</Topic>
                  <Title>{formatPricesTitle(prices.min, prices.max)}</Title>
                  <Description>The average nightly price is $75.</Description>
                  <Histogram>
                    <Columns height={numberRoomOffers} />
                    <Rheostat
                      onValuesUpdated={this.props.updateValuePrices}
                      min={10}
                      max={1000}
                      values={[prices.min, prices.max]}
                    />
                  </Histogram>
                </Section>
              </MediaQuery>
              <Section>
                <Topic>Rooms and beds</Topic>
                <Facilities
                  type="bedrooms"
                  filter="furnishings"
                  amount={furnishings.bedrooms}
                  addNumber={this.props.addNumber}
                  reduceNumber={this.props.reduceNumber}
                  switchDisableReduce={this.props.switchDisableReduce}
                />
                <Facilities
                  type="beds"
                  filter="furnishings"
                  amount={furnishings.beds}
                  addNumber={this.props.addNumber}
                  reduceNumber={this.props.reduceNumber}
                  switchDisableReduce={this.props.switchDisableReduce}
                />
                <Facilities
                  type="bathrooms"
                  filter="furnishings"
                  amount={furnishings.bathrooms}
                  addNumber={this.props.addNumber}
                  reduceNumber={this.props.reduceNumber}
                  switchDisableReduce={this.props.switchDisableReduce}
                />
              </Section>
              <Section>
                <Topic>More options</Topic>
                <MediaQuery maxWidth={968}>
                  <Options
                    filter="instantBook"
                    title="Instant Book"
                    check={moreOptions.instantBook}
                    onCheckOption={this.props.onCheckOption}
                    description="Secure a reservation instantly."
                  />
                </MediaQuery>
                <Options
                  title="Superhost"
                  filter="superHost"
                  check={moreOptions.superHost}
                  onCheckOption={this.props.onCheckOption}
                  description="Stay with recognized hosts."
                />
              </Section>
              <Dropdown>
                <Wrap>
                  <Topic>Amenties</Topic>
                  <div className="hidden-sm hidden-md hidden-lg hidden-xl">
                    <Dropout
                      active={amenties.isOpen}
                      onClick={() => this.props.switchOpeningDropdown('amenties')}
                    >
                      See all
                    </Dropout>
                  </div>
                </Wrap>
                <Checkboxs
                  active={amenties.isOpen}
                  title="Heating"
                  type="heating"
                  checkbox="amenties"
                  check={amenties.heating}
                  onCheckCheckbox={this.props.onCheckCheckbox}
                  visible
                />
                <Checkboxs
                  active={amenties.isOpen}
                  title="Kitchen"
                  type="kitchen"
                  checkbox="amenties"
                  check={amenties.kitchen}
                  onCheckCheckbox={this.props.onCheckCheckbox}
                  visible
                />
                <Checkboxs
                  active={amenties.isOpen}
                  title="TV"
                  type="tv"
                  checkbox="amenties"
                  check={amenties.tv}
                  onCheckCheckbox={this.props.onCheckCheckbox}
                  visible
                />
                <Checkboxs
                  active={amenties.isOpen}
                  title="Wireless Internet"
                  type="wireless"
                  checkbox="amenties"
                  check={amenties.wireless}
                  onCheckCheckbox={this.props.onCheckCheckbox}
                  visible
                />
                <Checkboxs
                  active={amenties.isOpen}
                  title="Fireplace"
                  type="fireplace"
                  checkbox="amenties"
                  check={amenties.fireplace}
                  onCheckCheckbox={this.props.onCheckCheckbox}
                />
                <Checkboxs
                  active={amenties.isOpen}
                  title="Shampoo"
                  type="shampoo"
                  checkbox="amenties"
                  check={amenties.shampoo}
                  onCheckCheckbox={this.props.onCheckCheckbox}
                />
                <Checkboxs
                  active={amenties.isOpen}
                  title="Iron"
                  type="iron"
                  checkbox="amenties"
                  check={amenties.iron}
                  onCheckCheckbox={this.props.onCheckCheckbox}
                />
                <Checkboxs
                  active={amenties.isOpen}
                  title="Intercom"
                  type="intercom"
                  checkbox="amenties"
                  check={amenties.intercom}
                  onCheckCheckbox={this.props.onCheckCheckbox}
                />
                <Checkboxs
                  active={amenties.isOpen}
                  title="Washer"
                  type="washer"
                  checkbox="amenties"
                  check={amenties.washer}
                  onCheckCheckbox={this.props.onCheckCheckbox}
                />
                <Closeout
                  active={amenties.isOpen}
                  onClick={() => this.props.switchOpeningDropdown('amenties')}
                >
                  Close amenties
                </Closeout>
                <div className="hidden-xs">
                  <Dropout
                    active={amenties.isOpen}
                    onClick={() => this.props.switchOpeningDropdown('amenties')}
                  >
                    See all amenties
                  </Dropout>
                </div>
              </Dropdown>
              <Dropdown>
                <Wrap>
                  <Topic>Facilities</Topic>
                  <div className="hidden-sm hidden-md hidden-lg hidden-xl">
                    <Dropout
                      active={facilities.isOpen}
                      onClick={() => this.props.switchOpeningDropdown('facilites')}
                    >
                      See all
                    </Dropout>
                  </div>
                </Wrap>
                <Checkboxs
                  active={facilities.isOpen}
                  title="Elebator"
                  type="elebator"
                  checkbox="facilities"
                  check={facilities.elebator}
                  onCheckCheckbox={this.props.onCheckCheckbox}
                  visible
                />
                <Checkboxs
                  active={facilities.isOpen}
                  title="Free parking on premises"
                  type="parking"
                  checkbox="facilities"
                  check={facilities.parking}
                  onCheckCheckbox={this.props.onCheckCheckbox}
                  visible
                />
                <Checkboxs
                  active={facilities.isOpen}
                  type="pool"
                  title="Pool"
                  checkbox="facilities"
                  check={facilities.pool}
                  onCheckCheckbox={this.props.onCheckCheckbox}
                  visible
                />
                <Checkboxs
                  active={facilities.isOpen}
                  title="Wheelchair accessible"
                  type="disability"
                  checkbox="facilities"
                  check={facilities.disability}
                  onCheckCheckbox={this.props.onCheckCheckbox}
                  visible
                />
                <Checkboxs
                  active={facilities.isOpen}
                  title="Bathhouse"
                  type="bathhouse"
                  checkbox="facilities"
                  check={facilities.bathhouse}
                  onCheckCheckbox={this.props.onCheckCheckbox}
                />
                <Checkboxs
                  active={facilities.isOpen}
                  title="Garden"
                  type="garden"
                  checkbox="facilities"
                  check={facilities.garden}
                  onCheckCheckbox={this.props.onCheckCheckbox}
                />
                <Closeout
                  active={facilities.isOpen}
                  onClick={() => this.props.switchOpeningDropdown('facilities')}
                >
                  Close facilities
                </Closeout>
                <div className="hidden-xs">
                  <Dropout
                    active={facilities.isOpen}
                    onClick={() => this.props.switchOpeningDropdown('facilities')}
                  >
                    See all facilities
                  </Dropout>
                </div>
              </Dropdown>
              <Bottom>
                <Save onClick={this.onApply}>See homes</Save>
                {isApply ? (
                  <Cancel onClick={this.resetSelection}>Reset</Cancel>
                ) : (
                  <Cancel onClick={this.onClose}>Cancel</Cancel>
                )}
                <Apply onClick={this.onApply}>See homes</Apply>
              </Bottom>
            </div>
          </Filter>
        )}
        {ShowOverlay(isOpen, this.onClose)}
        {ShowScrollLock(isOpen)}
      </React.Fragment>
    );
  }
}
