import React, { Component } from "react";
import styled, { css } from "styled-components";
import privateRoom from "./private.svg";

const Room = styled.aside`
  position: absolute;
  top: 40px;
  left: 0;
  display: inline-block;
  height: 290px;
  width: 326px;
  padding: 32px 24px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.08);
  ${"" /* NONE */};
  ${"" /* display: none; */};
`;

const Bottom = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
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

const RoomType = styled.div`
  ${props => css`
    background: url(${props.imgSrc}) no-repeat center;
    background-size: 32px;
  `};
`;

const Type = styled.span``;

const Title = styled.span``;

const Desc = styled.span``;

const Checkbox = styled.span`
  background: url() no-repeat center;
  background-size: 32px;
`;

const Input = styled.input``;

function CheckRoom(props) {
  return (
    <RoomType>
      <Checkbox>
        <Input type="checkbox" />
      </Checkbox>
      <Type>
        <Title>{props.type}</Title>
        <Desc>{props.desc}</Desc>
      </Type>
    </RoomType>
  );
}

export default function() {
  return (
    <Room>
      <CheckRoom
        type="Private room"
        desc="Have your own room and share some common spaces"
        imgSrc={privateRoom}
      />
      <Bottom>
        <Cancel>Cancel</Cancel>
        <Apply>Apply</Apply>
      </Bottom>
    </Room>
  );
}
