import React, { Component } from "react";
import styled from "styled-components";
import arrow from "./arrow.svg";

export const Head = styled.div`
  margin-top: 48px;

  & .row {
    align-items: center;
  }
`;

export const Caption = styled.h3`
  margin: 0;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 32px;
  font-size: 20px;
  line-height: 28px;
  color: #383838;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 28px;
  }

  @media (min-width: 320px) {
    font-size: 24px;
  }
`;

export const More = styled.a`
  position: relative;
  display: block;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  color: #383838;
  text-decoration: none;
  text-align: right;

  &::after {
    position: relative;
    top: 0;
    right: 0;
    content: "";
    display: inline-block;
    margin-left: 6px;
    width: 6px;
    height: 10px;
    background-repeat: no-repeat;
    background-size: contain;
    background: url(${arrow}) no-repeat center center;
    background-size: cover;
  }

  @media (min-width: 320px) {
    font-size: 14px;
  }
`;
