import React, { Component } from "react";
import styled from "styled-components";

export const Head = styled.div`
  margin-top: 48px;
  margin-bottom: 24px;

  & .row {
    align-items: center;
  }
`;

export const Caption = styled.h3`
  margin: 0;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 32px;
  line-height: 34px;
  color: #383838;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }

  @media (max-width: 320px) {
    font-size: 20px;
  }
`;

export const More = styled.a`
  position: relative;
  display: block;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #383838;
  text-decoration: none;
  text-align: right;

  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

export const Arrow = styled.span`
  display: inline-block;
  width: 6px;
  height: 10px;
  background-repeat: no-repeat;
  background-size: cover;
`;
