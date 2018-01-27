import React from 'react';

import fullRoom from '../../UI/private.svg';
import entireRoom from '../../UI/entire.svg';
import sharedRoom from '../../UI/shared.svg';
import {
  Apply,
  Btn,
  Bottom,
  Cancel,
  Checkbox,
  Description,
  Filter,
  Input,
  Overlay,
  Premises,
  Title,
  Type,
  Wrap,
} from './styled';

const formatRoomsLabel = (isOpen, filterLabel, entire, full, shared) => {
  const commonType = entire + full + shared;

  if (commonType > 1) return `${filterLabel} · ${[entire + full + shared]}`;
  if (entire) return 'Entire home';
  if (full) return 'Private room';
  if (shared) return 'Shared room';
  return filterLabel;
};

const ShowOverlay = (isOpen, onClose) => isOpen && <Overlay onClick={onClose} />;

const Room = props => (
  <Premises for={props.type} imgSrc={props.imgSrc}>
    <Checkbox
      for={props.type}
      check={props.check}
      onClick={() => props.onCheckCheckbox(props.checkbox, props.type)}
    >
      <Input id={props.type} type="checkbox" value={props.type} />
    </Checkbox>
    <Type>
      <Title>{props.title}</Title>
      <Description>{props.desc}</Description>
    </Type>
  </Premises>
);

export default class Rooms extends React.Component {
  state = {
    isApply: false,
  };

  onClose = () => {
    this.resetSelection();
    this.props.onClose();
  };

  onApply = () => {
    if (this.props.entire || this.props.full || this.props.shared) {
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
      id, entire, full, shared, openedFilter,
    } = this.props;
    const filterLabel = this.props.children;
    const isOpen = openedFilter === id;

    return (
      <React.Fragment>
        <Wrap>
          <Btn isOpen={isApply || isOpen} onClick={this.switchOpeningFilter}>
            {formatRoomsLabel(isOpen, filterLabel, entire, full, shared)}
          </Btn>
          {isOpen && (
            <Filter>
              <Room
                check={entire}
                onCheckCheckbox={this.props.onCheckCheckbox}
                type="entire"
                title="Entire home"
                checkbox={id}
                desc="Have a place to yourself"
                imgSrc={entireRoom}
              />
              <Room
                check={full}
                onCheckCheckbox={this.props.onCheckCheckbox}
                type="full"
                title="Private room"
                checkbox={id}
                desc="Have your own room and share some common spaces"
                imgSrc={fullRoom}
              />
              <Room
                check={shared}
                onCheckCheckbox={this.props.onCheckCheckbox}
                type="shared"
                title="Shared room"
                checkbox={id}
                desc="Stay in a shared space, like a common room"
                imgSrc={sharedRoom}
              />
              <Bottom>
                {entire || full || shared ? (
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
