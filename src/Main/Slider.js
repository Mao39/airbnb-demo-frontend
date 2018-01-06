import React, { Component } from "react";
import styled from "styled-components";
import arrow from "./arrow.svg";

export const Slider = styled.div`
  position: relative;

  @media (max-width: 768px) {
    overflow-y: hidden;
    overflow-x: auto;

    & .row {
      flex-wrap: nowrap;
    }
  }
`;

export const SliderBtn = styled.button`
  position: absolute;
  right: -16px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  background-color: #fff;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: 10px 18px;
  background-position: center center;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 1.3rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 575px) {
    display: none;
  }
`;
