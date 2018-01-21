import React, { Component } from "react";
import styled, { css } from "styled-components";
import ScrollLock from "react-scrolllock";
import cross from "../../UI/cross.svg";
import minus from "../../UI/minus.svg";
import plus from "../../UI/plus.svg";

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

  color: ${props => (props.isOpen ? "#fff" : "#383838")};
  background: ${props => (props.isOpen ? "#008489" : "transparent")};
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

  opacity: ${props =>
    props.type !== "adult" && props.removeActive > 0 ? "1" : ".5"};
  cursor: ${props => (props.removeActive > 0 ? "pointer" : "default")};
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
  height: 64px;
  padding: 8px;
  box-shadow: 0 -1px #d5d5d5;

  @media (min-width: 576px) {
    padding: 0;
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
  width: 110px;
  height: 64px;
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
  width: 110px;
  height: 64px;
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

const Guest = props => {
  return (
    <People>
      <Type>
        <Man>{props.type}</Man>
        <Age>{props.age}</Age>
      </Type>
      <Control>
        <Remove
          onClick={() => props.removeGuest(props.type)}
          removeActive={(props.amount, props.type)}
        />
        <Amount>{props.amount}</Amount>
        <Add onClick={() => props.addGuest(props.type)} />
      </Control>
    </People>
  );
};

const formatGuestsLabel = (isOpen, filterLabel) => {
  return filterLabel;
};

const scrollLock = isOpen => {
  if (!matchMedia("(min-width: 576px)").matches)
    if (isOpen) return <ScrollLock />;
};

export default class Guests extends React.Component {
  state = {
    adult: 1,
    children: 0,
    infants: 0
  };

  removeGuest = type => {
    if (this.state[type] > 1) {
      this.setState(prevState => ({
        [type]: prevState[type] - 1
      }));
      return true;
    } else if (type !== `adult` && this.state[type] > 0) {
      this.setState(prevState => ({
        [type]: prevState[type] - 1
      }));
      return true;
    }
  };

  addGuest = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1
    }));
  };

  activeRemoveButton = () => {};

  render() {
    const { isOpen, switchOpeningFilter } = this.props;
    const filterLabel = this.props.children;

    return (
      <React.Fragment>
        <Wrap>
          <Btn isOpen={isOpen} onClick={switchOpeningFilter}>
            {formatGuestsLabel(isOpen, filterLabel)}
          </Btn>
          {isOpen && (
            <Filter>
              <Header>
                <Exit onClick={switchOpeningFilter} />
                <Caption>Guests</Caption>
                <Reset>Reset</Reset>
              </Header>
              <Guest
                type="adult"
                amount={this.state.adult}
                addGuest={this.addGuest}
                removeGuest={this.removeGuest}
                removeActive={this.removeGuest}
              />
              <Guest
                type="children"
                age="Ages 2 — 12"
                amount={this.state.children}
                addGuest={this.addGuest}
                removeGuest={this.removeGuest}
                removeActive={this.removeGuest}
              />
              <Guest
                type="infants"
                age="Under 2"
                amount={this.state.infants}
                addGuest={this.addGuest}
                removeGuest={this.removeGuest}
                removeActive={this.removeGuest}
              />
              <Bottom>
                <Save>Save</Save>
                <Cancel onClick={switchOpeningFilter}>Cancel</Cancel>
                <Apply>Apply</Apply>
              </Bottom>
            </Filter>
          )}
          {isOpen && <Overlay onClick={switchOpeningFilter} />}
          {scrollLock(isOpen)}
        </Wrap>
      </React.Fragment>
    );
  }
}
