import React, { Component } from "react";
import styled from "styled-components";

export const Slider = styled.div`
  @media (max-width: 768px) {
    overflow-y: hidden;
    overflow-x: auto;

    & .row {
      flex-wrap: nowrap;
    }
  }
`;

export const Wrap = styled.div`
  position: relative;
  left: 1%;
  display: flex;
  margin-top: 153px;
`;

export const SliderImg = styled.img`
  padding: 11px;
`;

export const SliderBtn = styled.button`
  position: absolute;
  border: 0px;
  right: 0%;
  z-index: 1;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  box-shadow: 0px 2px rgba(72, 72, 72, 0.16);
  cursor: pointer;
`;
