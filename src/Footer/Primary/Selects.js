import React, { Component } from "react";
import styled from "styled-components";
import arrow from "../../assets/arrow.svg";

const Select = styled.select`
  margin-bottom: 16px;
  width: 100%;
  padding: 10px 3px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background: url(${arrow}) no-repeat;
  background-position: right 8px top 20px;
  background-size: 12px 7px;
  appearance: none;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 14px 8px;
    background-size: 16px 9px;
  }

  @media (min-width: 991px) {
    padding: 12px 16px;
    background-position: right 16px top 18px;
  }
`;

const Option = styled.option`
  padding: 0;
  padding-bottom: 4px;
  font-size: 13px;
  line-height: 21px;
  font-weight: lighter;
  color: #383838;

  @media (min-width: 576px) {
    font-size: 13px;
  }

  @media (min-width: 768px) {
    font-size: 13px;
  }
`;

export default function() {
  return (
    <div className="col-md-3 col-sm-12 col-xs-12">
      <div className="row">
        <div className="col-xs-6">
          <Select defaultValue="English">
            <Option value="English">English</Option>
            <Option value="Русский">Русский</Option>
          </Select>
        </div>
        <div className="col-xs-6">
          <Select defaultValue="United States dollar">
            <Option value="United States dollar">United States dollar</Option>
            <Option value="Российский рубль">Российский рубль</Option>
          </Select>
        </div>
      </div>
    </div>
  );
}
