import React, { Component } from "react";
import styled from "styled-components";

const Filters = styled.div`
  display: flex;
  align-items: center;
  align-content: flex-start;
  height: 56px;
  box-shadow: 0 0 0.5px rgba(72, 72, 72, 0.3);
`;

const Btn = styled.button`
  margin-left: 8px;
  padding: 7px 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #383838;
  background: transparent;
`;

export default function() {
  return (
    <Filters>
      <Btn>Dates</Btn>
      <Btn>Guests</Btn>
      <Btn>More filters</Btn>
    </Filters>
  );
}
