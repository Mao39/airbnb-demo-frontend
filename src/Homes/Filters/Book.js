import React from 'react';
import styled from 'styled-components';

import {
  Apply,
  Btn,
  Bottom,
  Cancel,
  Description,
  Label,
  Mark,
  Overlay,
  Switch,
  Topic,
  Wrap,
} from './styled';

const Filter = styled.aside`
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 3;
  display: inline-block;
  width: 326px;
  height: 172px;
  padding: 32px 24px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.08);
`;

const Title = styled(Topic)`
  margin: 0;
`;

const ShowOverlay = (isOpen, onClose) => isOpen && <Overlay onClick={onClose} />;

export default class Prices extends React.Component {
  state = {
    isApply: false,
  };

  onClose = () => {
    this.setState({ isApply: false });
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
