import React, { Component } from "react";
import styled from "styled-components";

const Filters = styled.div`
  position: fixed;
  top: 80px;
  right: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  align-content: flex-start;
  height: 56px;
  background: #fff;
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
      <div className="container">
        <Btn>Dates</Btn>
        <Btn>Guests</Btn>
        <Btn>More filters</Btn>
      </div>
    </Filters>
  );
}
