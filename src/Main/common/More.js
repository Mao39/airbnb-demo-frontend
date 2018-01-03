import React, { Component } from "react";
import styled from "styled-components";

export const More = styled.a`
  position: relative;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #383838;
  text-decoration: none;
`;

export default function() {
  return <More />;
}
