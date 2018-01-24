import React from 'react';
import styled from 'styled-components';

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
  margin-top: 4px;
  margin-bottom: 0;
  font-size: 13px;
  line-height: 15px;
  color: #383838;

  @media (min-width: 576px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const Place = styled.span`
  margin-top: 13px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 8px;
  line-height: 9px;
  font-weight: bold;
  color: #383838;
  text-transform: uppercase;

  @media (min-width: 576px) {
    font-size: 10px;
    line-height: 12px;
  }
`;

const Name = styled.span`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;

  @media (min-width: 576px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

const Rate = styled.span`
  margin-top: 6px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 14px;
  font-weight: lighter;
  color: #383838;
  opacity: 0.9;

  @media (min-width: 576px) {
    font-size: 14px;
    line-height: 16px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

export default props => (
  <Card>
    <Image src={props.imgSrc} />
    <Place>{props.place}</Place>
    <Title>
      <Name>{props.children}</Name>
    </Title>
    <Rate>About ${props.rate} per person</Rate>
  </Card>
);
