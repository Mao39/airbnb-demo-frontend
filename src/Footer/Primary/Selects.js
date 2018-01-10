import React, { Component } from "react";
import styled from "styled-components";
import arrow from "../../UI/downArrow.svg";

const Select = styled.select`
  margin-bottom: 16px;
  width: 100%;
  padding: 12px 8px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 14px;
  background: url(${arrow}) no-repeat;
  background-position: right 10px top 18px;
  background-size: 11px 6px;
  appearance: none;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
    padding: 14px 8px;
    background-size: 15px 8px;
    background-position: right 12px top 18px;
  }

  @media (min-width: 991px) {
    padding: 12px 16px;
    background-position: right 16px top 18px;
  }
`;

const Option = styled.option`
  padding: 0;
  padding-bottom: 4px;
  font-weight: lighter;
  color: #383838;
`;

export default function() {
  return (
    <div className="col-xs-12 col-sm-12 col-md-3">
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-12">
          <Select defaultValue="English">
            <Option value="English">English</Option>
            <Option value="Русский">Русский</Option>
          </Select>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-12">
          <Select defaultValue="United States dollar">
            <Option value="United States dollar">United States dollar</Option>
            <Option value="Российский рубль">Российский рубль</Option>
          </Select>
        </div>
      </div>
    </div>
  );
}
