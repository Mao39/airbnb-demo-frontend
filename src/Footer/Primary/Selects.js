import React, { Component } from "react";
import styled from "styled-components";
import arrow from "../../assets/arrow.svg";

const Select = styled.select`
  margin-bottom: 16px;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background: url(${arrow}) no-repeat;
  background-position: right 10px top 16px;
  background-size: 13px;
  appearance: none;
  cursor: pointer;

  @media (min-width: 991px) {
    background-position: right 20px top 20px;
    backround-size: auto;
  }
`;

const Option = styled.option`
  font-size: 13px;
  line-height: 21px;
  font-weight: lighter;
  color: #383838;

  @media (min-width: 576px) {
    font-size: 18px;
  }
`;

export default function() {
  return (
    <div className="col-md-3 col-sm-3 col-xs-12">
      <Select defaultValue="English">
        <Option value="English">English</Option>
        <Option value="Русский">Русский</Option>
      </Select>
      <Select defaultValue="United States dollar">
        <Option value="United States dollar">United States dollar</Option>
        <Option value="Российский рубль">Российский рубль</Option>
      </Select>
    </div>
  );
}
