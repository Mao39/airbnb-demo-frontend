import React from 'react';
import styled from 'styled-components';
import star from '../../UI/star.svg';

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
  margin-top: 8px;
  margin-bottom: 0;
  font-size: 13px;
  line-height: 15px;
  color: #383838;

  @media (min-width: 576px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const Price = styled.span`
  font-weight: bold;
`;

const Name = styled.span`
  font-weight: 600;
`;

const Rating = styled.div`
  margin-top: 1px;
`;

const Stars = styled.div`
  display: inline-block;
  margin-right: 8px;
`;

const Star = styled.img`
  margin-right: 4px;
`;

const Reviews = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: #383838;
`;

export default props => (
  <Card>
    <Image src={props.imgSrc} />
    <Title>
      <Price>${props.price}</Price>
      <Name> {props.children}</Name>
    </Title>
    <Rating>
      <Stars>
        <Star src={star} alt="Star" />
        <Star src={star} alt="Star" />
        <Star src={star} alt="Star" />
        <Star src={star} alt="Star" />
        <Star src={star} alt="Star" />
      </Stars>
      <Reviews>{props.numberReviews} reviews</Reviews>
    </Rating>
  </Card>
);
