import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.a`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 24px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  cursor: pointer;
`;

const Image = styled.img`
  position: relative;
  width: 100%;
`;

const Title = styled.p`
  margin-top: 9px;
  margin-bottom: 0;
  font-size: 13px;
  line-height: 15px;
  color: #383838;

  @media (min-width: 576px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const Name = styled.span`
  font-size: 12px;
  line-height: 14px;
  font-weight: bold;

  @media (min-width: 576px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export default props => {
  return (
    <Card>
      <Image src={props.imgSrc} />
      <Title>
        <Name>{props.children}</Name>
      </Title>
    </Card>
  );
};
