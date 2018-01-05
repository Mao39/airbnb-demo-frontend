import React, { Component } from "react";
import styled from "styled-components";

export const Slider = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  margin-right: -8px;
  margin-left: -8px;
  flex: 0 1 auto;
  overflow-y: hidden;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
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

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 346px;
  object-fit: cover;
`;

export const Title = styled.div`
  margin-top: 8px;
  font-size: 15px;
  line-height: 18px;
  color: #383838;
`;

export const Price = styled.span`
  font-weight: bold;
`;

export const Name = styled.span`
  font-weight: 600;
`;

export const Rating = styled.div`
  margin-top: 8px;
`;

export const Stars = styled.div`
  display: inline-block;
  margin-right: 8px;
`;

export const Star = styled.img`
  margin-right: 4px;
`;

export const Reviews = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: #383838;
`;

export default {
  Slider,
  SliderBtn,
  Card,
  Image,
  Title,
  Price,
  Name,
  Rating,
  Stars,
  Star,
  Reviews
};
