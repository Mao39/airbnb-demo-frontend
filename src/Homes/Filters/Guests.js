import React from 'react';
import ScrollLock from 'react-scrolllock';

import {
  Add,
  Age,
  Amount,
  Apply,
  Btn,
  Bottom,
  Cancel,
  Caption,
  Characteristics,
  Control,
  Exit,
  Filter,
  Header,
  Man,
  Overlay,
  People,
  Reduce,
  Reset,
  Save,
  Wrap,
} from './styled';

const formatGuestsLabel = (filterLabel, adults, children, infants) => {
  const commonNumber = adults + children;
  const formatInfants = infants > 1 ? `${infants} infants` : `${infants} infant`;
  const formatAdults = commonNumber > 1 ? `${commonNumber} guests` : `${commonNumber} guest`;

  if (commonNumber + infants > 1) {
    if (infants > 0) return `${formatAdults}, ${formatInfants}`;
    return `${formatAdults}`;
  }

  return filterLabel;
};

const ShowOverlay = (isOpen, onClose) => isOpen && <Overlay onClick={onClose} />;

const ShowScrollLock = isOpen =>
  !matchMedia('(min-width: 576px)').matches && isOpen && <ScrollLock />;

const Guest = props => (
  <People>
    <Characteristics>
      <Man>{props.title}</Man>
      <Age>{props.age}</Age>
    </Characteristics>
    <Control>
      <Reduce
        onClick={() => props.reduceNumber(props.filter, props.type)}
        disabled={props.switchDisableReduce(props.type)}
      />
      <Amount>{props.amount}</Amount>
      <Add onClick={() => props.addNumber(props.filter, props.type)} />
    </Control>
  </People>
);

export default class Guests extends React.Component {
  state = {
    isApply: false,
  };

  onApply = () => {
    if (this.props.adults > 1 || this.props.babies || this.props.infants) {
      this.setState({ isApply: true });
    }
    this.switchOpeningFilter();
  };

  onClose = () => {
    this.resetSelection();
    this.props.onClose();
  };

  resetSelection = () => {
    this.setState({ isApply: false });
    this.props.resetSelection(this.props.id);
  };

  switchOpeningFilter = () => {
    this.props.switchOpeningFilter(this.props.id);
  };

  switchDisableReduce = (type) => {
    if (this.props[type] > 1) return false;
    if (this.props[type] > 0 && type !== 'adults') return false;
    return true;
  };

  render() {
    const { isApply } = this.state;
    const {
      adults, babies, infants, id,
    } = this.props;
    const filterLabel = this.props.children;
    const isOpen = this.props.openedFilter === id;

    return (
      <React.Fragment>
        <Wrap>
          <Btn isOpen={isApply || isOpen} onClick={this.switchOpeningFilter}>
            {formatGuestsLabel(filterLabel, adults, babies, infants)}
          </Btn>
          {isOpen && (
            <Filter>
              <Header>
                <Exit onClick={this.onClose} />
                <Caption>Guests</Caption>
                <Reset onClick={this.resetSelection}>Reset</Reset>
              </Header>
              <Guest
                filter={id}
                type="adults"
                title="Adults"
                amount={adults}
                addNumber={this.props.addNumber}
                reduceNumber={this.props.reduceNumber}
                switchDisableReduce={this.switchDisableReduce}
              />
              <Guest
                filter={id}
                type="babies"
                title="Children"
                age="Ages 2 — 12"
                amount={babies}
                addNumber={this.props.addNumber}
                reduceNumber={this.props.reduceNumber}
                switchDisableReduce={this.switchDisableReduce}
              />
              <Guest
                filter={id}
                type="infants"
                title="Infants"
                age="Under 2"
                amount={infants}
                addNumber={this.props.addNumber}
                reduceNumber={this.props.reduceNumber}
                switchDisableReduce={this.switchDisableReduce}
              />
              <Bottom>
                <Save onClick={this.onApply}>Save</Save>
                {adults > 1 || babies || infants ? (
                  <Cancel onClick={this.resetSelection}>Reset</Cancel>
                ) : (
                  <Cancel onClick={this.onClose}>Cancel</Cancel>
                )}
                <Apply onClick={this.onApply}>Apply</Apply>
              </Bottom>
            </Filter>
          )}
          {ShowOverlay(isOpen, this.onClose)}
          {ShowScrollLock(isOpen)}
        </Wrap>
      </React.Fragment>
    );
  }
}
