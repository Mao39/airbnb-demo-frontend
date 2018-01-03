import React, { Component } from "react";
import styled from "styled-components";

export const SliderBtn = styled.button`
  position: absolute;
  top: 35%;
  right: -20px;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  border-radius: 50%;
  background: #fff;
  background-repeat: no-repeat;
  background-position: center center;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  cursor: pointer;
`;

export default function() {
  return <SliderBtn />;
}
