import React, { Component } from "react";
import styled from "styled-components";

export const Caption = styled.h3`
  margin: 0;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 32px;
  line-height: 34px;
  color: #383838;
`;

export default function() {
  return <Caption />;
}
