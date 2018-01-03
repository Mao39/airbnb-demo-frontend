import React, { Component } from "react";
import styled from "styled-components";
import arrow from "../assets/arrow.svg";

export const Parametrs = styled.select`
  margin-bottom: 16px;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background: url(${arrow}) no-repeat right 20px top 20px;
  appearance: none;
  cursor: pointer;
`;

export const Select = styled.option`
  font-size: 18px;
  line-height: 21px;
  font-weight: 100;
  color: #383838;
`;

export default function() {
  return (
    <React.Fragment>
      <Parametrs>
        <Select value="English" selected>
          English
        </Select>
        <Select value="Русский">Русский</Select>
      </Parametrs>
      <Parametrs>
        <Select value="United States dollar" selected>
          United States dollar
        </Select>
        <Select value="Русский рубль">Русский рубль</Select>
      </Parametrs>
    </React.Fragment>
  );
}
