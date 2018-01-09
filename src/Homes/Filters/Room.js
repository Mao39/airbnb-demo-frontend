import React, { Component } from "react";
import styled, { css } from "styled-components";

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

function HumanCoast(props) {
  return <h1>s</h1>;
}

export default function() {
  return (
    <Room>
      <Bottom>
        <Cancel>Cancel</Cancel>
        <Apply>Apply</Apply>
      </Bottom>
    </Room>
  );
}
