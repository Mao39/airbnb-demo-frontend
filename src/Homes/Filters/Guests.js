import React, { Component } from "react";
import styled, { css } from "styled-components";
import cross from "./cross.svg";
import minus from "./minus.svg";
import plus from "./plus.svg";

const Guests = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;

  @media (min-width: 576px) {
    position: absolute;
    top: 132px;
    left: 5%;
    width: 326px;
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
`;

const Age = styled.span`
  margin-top: 6px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: lighter;
  color: #383838;
`;

const Coast = styled.div`
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
  opacity: 0.5;

  ${props =>
    props.removeActive &&
    css`
      opacity: 1;
      cursor: pointer;
    `};
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
  height: 64px;
  padding: 8px;
  box-shadow: 0 -1px #d5d5d5;

  @media (min-width: 576px) {
    display: none;
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
`;

function HumanCoast(props) {
  return (
    <People>
      <Type>
        <Man>{props.type}</Man>
        <Age>{props.age}</Age>
      </Type>
      <Coast>
        <Remove />
        <Amount>{props.amount}</Amount>
        <Add />
      </Coast>
    </People>
  );
}

export default function() {
  return (
    <Guests>
      <Header>
        <Exit />
        <Caption>Guests</Caption>
        <Reset>Reset</Reset>
      </Header>
      <HumanCoast type="Adult" amount={0} />
      <HumanCoast type="Children" age="Ages 2 — 12" amount={0} />
      <HumanCoast type="Infants" age="Under 2" amount={0} />
      <Bottom>
        <Save>Save</Save>
      </Bottom>
    </Guests>
  );
}
