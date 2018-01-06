import React, { Component } from "react";
import styled from "styled-components";

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  cursor: pointer;
`;

export const Image = styled.img`
  position: relative;
  width: 100%;
  max-height: 346px;
  object-fit: cover;
`;

export const Title = styled.p`
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
