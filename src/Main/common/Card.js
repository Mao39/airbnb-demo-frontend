import React, { Component } from "react";
import styled from "styled-components";

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  cursor: pointer;
`;

export default function() {
  return <Card />;
}
