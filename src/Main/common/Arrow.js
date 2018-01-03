import React, { Component } from "react";
import styled from "styled-components";

export const Arrow = styled.span`
  display: inline-block;
  width: 6px;
  height: 10px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function() {
  return <Arrow />;
}
