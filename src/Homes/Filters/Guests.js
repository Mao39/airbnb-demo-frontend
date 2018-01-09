import React, { Component } from "react";
import styled, { css } from "styled-components";
import cross from "./cross.svg";
import minus from "./minus.svg";
import plus from "./plus.svg";

const Guests = styled.aside`
  ${"" /* NONE */};
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;

  @media (min-width: 576px) {
    position: absolute;
    top: 40px;
    left: 0;
    display: inline-block;
    height: 290px;
    width: 326px;
    padding: 32px 24px;
    border: 1px solid rgba(72, 72, 72, 0.2);
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(72, 72, 72, 0.08);
    ${"" /* NONE */};
    display: none;
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
`;

const Apply = styled.button`
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
        <Cancel>Cancel</Cancel>
        <Apply>Apply</Apply>
      </Bottom>
    </Guests>
  );
}
