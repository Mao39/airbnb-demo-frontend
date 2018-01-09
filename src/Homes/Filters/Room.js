import React, { Component } from "react";
import styled, { css } from "styled-components";
import privateRoom from "./private.svg";
import check from "./check.svg";
import entire from "./entire.svg";
import shared from "./shared.svg";

const Room = styled.aside`
  position: absolute;
  top: 40px;
  left: 0;
  display: none;
  height: 290px;
  width: 326px;
  padding: 24px 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.08);

  @media (min-width: 576px) {
    ${"" /* display: inline-block; */};
    ${"" /* NONE */};
    display: none;
  }
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
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 20px;
  height: 20px;
  opacity: 0;
  cursor: pointer;
`;

const RoomType = styled.div`
  display: flex;
  margin-bottom: 14px;
  background: url(${props => props.imgSrc}) no-repeat center right;
  background-size: 32px;
`;

const Checkbox = styled.button`
  position: relative;
  width: 24px;
  height: 24px;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 4px;
  background: ${props => (props.activeCheck ? "#008489" : "transparent")};
  background-image: url(${check});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 13px 9px;
  cursor: pointer;
`;

const CheckRoom = props => {
  return (
    <RoomType imgSrc={props.imgSrc}>
      <Checkbox activeCheck={props.activeCheck}>
        <Input type="checkbox" />
      </Checkbox>
      <Type>
        <Title>{props.type}</Title>
        <Desc>{props.desc}</Desc>
      </Type>
    </RoomType>
  );
};

export default () => {
  return (
    <Room>
      <CheckRoom
        activeCheck
        type="Entire home"
        desc="Have a place to yourself"
        imgSrc={entire}
      />
      <CheckRoom
        type="Private room"
        desc="Have your own room and share some common spaces"
        imgSrc={privateRoom}
      />
      <CheckRoom
        type="Shared room"
        desc="Stay in a shared space, like a common room"
        imgSrc={shared}
      />
      <Bottom>
        <Cancel>Cancel</Cancel>
        <Apply>Apply</Apply>
      </Bottom>
    </Room>
  );
};
