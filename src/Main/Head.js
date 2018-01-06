import React, { Component } from "react";
import styled from "styled-components";

export const Head = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 48px;
  margin-bottom: 24px;
`;

export const Caption = styled.h3`
  margin: 0;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 32px;
  line-height: 34px;
  color: #383838;
`;

export const More = styled.a`
  position: relative;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #383838;
  text-decoration: none;
`;

export const Arrow = styled.span`
  display: inline-block;
  width: 6px;
  height: 10px;
  background-repeat: no-repeat;
  background-size: cover;
`;
