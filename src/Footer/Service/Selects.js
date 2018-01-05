import React, { Component } from "react";
import styled from "styled-components";
import arrow from "../../assets/arrow.svg";

const Select = styled.select`
  margin-bottom: 16px;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background: url(${arrow}) no-repeat right 20px top 20px;
  -webkit-appearance: none;
  cursor: pointer;

  @media (max-width: 991px) {
    font-size: 13px;
    background-size: 13px;
    background: url(${arrow}) no-repeat right 10px top 16px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

const Option = styled.option`
  font-size: 18px;
  line-height: 21px;
  font-weight: lighter;
  color: #383838;
`;

export default function() {
  return (
    <div className="col-md-3 col-sm-3 col-xs-12">
      <Select>
        <Option defaultValue="English">English</Option>
        <Option value="Русский">Русский</Option>
      </Select>
      <Select>
        <Option defaultValue="United States dollar">
          United States dollar
        </Option>
        <Option value="Российский рубль">Российский рубль</Option>
      </Select>
    </div>
  );
}
