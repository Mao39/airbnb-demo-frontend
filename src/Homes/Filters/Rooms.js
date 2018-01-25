import React from 'react';
import styled from 'styled-components';
import fullRoom from '../../UI/private.svg';
import entireRoom from '../../UI/entire.svg';
import sharedRoom from '../../UI/shared.svg';
import check from '../../UI/check.svg';

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

const Desc = styled.p`
  margin: 0;
  margin-top: 4px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 14px;
  font-weight: lighter;
  color: #383838;
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

const formatRoomsLabel = (isOpen, filterLabel, entire, full, shared) => {
  const commonType = entire + full + shared;

  if (commonType > 1) return `${filterLabel} · ${[entire + full + shared]}`;
  if (entire) return 'Entire home';
  if (full) return 'Private room';
  if (shared) return 'Shared room';
  return filterLabel;
};

const ShowOverlay = (isOpen, onCloseFilter) => isOpen && <Overlay onClick={onCloseFilter} />;

const CheckRoom = props => (
  <RoomType for={props.type} onClick={() => props.onCheck(props.type)} imgSrc={props.imgSrc}>
    <Checkbox for={props.type} onClick={() => props.onCheck(props.type)} check={props.check}>
      <Input id={props.type} type="checkbox" value={props.type} />
    </Checkbox>
    <Type>
      <Title>{props.title}</Title>
      <Desc>{props.desc}</Desc>
    </Type>
  </RoomType>
);

export default class Rooms extends React.Component {
  state = {
    entire: null,
    full: null,
    shared: null,
  };

  onCloseFilter = () => {
    this.resetSelection();
    this.props.onCloseFilter();
  };

  onCheck = (type) => {
    this.setState(prevState => ({ [type]: !prevState[type] }));
  };

  resetSelection = () => {
    this.setState({
      entire: null,
      full: null,
      shared: null,
    });
  };

  switchOpeningFilter = () => {
    this.props.switchOpeningFilter(this.props.children);
  };

  render() {
    const { entire, full, shared } = this.state;
    const filterLabel = this.props.children;
    const isOpen = this.props.openedFilter === filterLabel;

    return (
      <React.Fragment>
        <Wrap>
          <Btn isOpen={isOpen} onClick={this.switchOpeningFilter}>
            {formatRoomsLabel(isOpen, filterLabel, entire, full, shared)}
          </Btn>
          {isOpen && (
            <Filter>
              <CheckRoom
                check={entire}
                onCheck={this.onCheck}
                type="entire"
                title="Entire home"
                desc="Have a place to yourself"
                imgSrc={entireRoom}
              />
              <CheckRoom
                check={full}
                onCheck={this.onCheck}
                type="full"
                title="Private room"
                desc="Have your own room and share some common spaces"
                imgSrc={fullRoom}
              />
              <CheckRoom
                check={shared}
                onCheck={this.onCheck}
                type="shared"
                title="Shared room"
                desc="Stay in a shared space, like a common room"
                imgSrc={sharedRoom}
              />
              <Bottom>
                {entire || full || shared ? (
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
