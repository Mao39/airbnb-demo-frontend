import React from 'react';

import {
  Apply,
  Btn,
  Bottom,
  Cancel,
  Description,
  Filter,
  Label,
  Mark,
  Overlay,
  Switch,
  Title,
  Wrap,
} from './styled';

const ShowOverlay = (isOpen, onClose) => isOpen && <Overlay onClick={onClose} />;

export default class Prices extends React.Component {
  state = {
    isApply: false,
  };

  onClose = () => {
    this.props.onClose(this.props.id);
  };

  onApply = () => {
    if (this.props.instantBook) this.setState({ isApply: true });
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
    const { instantBook, openedFilter, id } = this.props;
    const filterLabel = this.props.children;
    const isOpen = openedFilter === id;

    return (
      <React.Fragment>
        <Wrap>
          <Btn isOpen={isApply || isOpen} onClick={this.switchOpeningFilter}>
            {filterLabel}
          </Btn>
          {isOpen && (
            <Filter>
              <Label>
                <Title>{filterLabel}</Title>
                <Description>Listings you can book without waiting for host approval.</Description>
                <Switch check={instantBook} onClick={() => this.props.onCheckOption('instantBook')}>
                  <Mark check={instantBook} />
                </Switch>
              </Label>
              <Bottom>
                {instantBook ? (
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
