import React, { Component } from "react";
import styled from "styled-components";

export const Slider = styled.div`
  position: relative;
`;

export const SliderBtn = styled.button`
  position: absolute;
  top: 35%;
  right: -20px;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  border-radius: 50%;
  background: #fff;
  background-repeat: no-repeat;
  background-position: center center;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  cursor: pointer;
`;

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  cursor: pointer;
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
