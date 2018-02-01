import React from 'react';
import styled from 'styled-components';
import times from 'lodash/times';
import star from '../UI/star.svg';

const Card = styled.a`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  cursor: pointer;
  margin-top: 24px;
`;

const Image = styled.img`
  position: relative;
  width: 100%;
`;

const Title = styled.p`
  margin-top: 8px;
  margin-bottom: 0;
  color: #383838;
`;

const Price = styled.span`
  margin-right: 8px;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
`;

const Name = styled.span`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
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

const Places = styled.div`
  margin-top: 2px;
`;

const Caption = Name.extend`
  display: inline-block;
  width: 75%;
  overflow: hidden;
  vertical-align: top;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
}
`;

const Type = styled.span`
  font-size: 15px;
  line-height: 18px;
  font-weight: lighter;
`;

const Beds = styled.span`
  font-size: 15px;
  line-height: 18px;
  font-weight: lighter;
`;

const formatTypeLabel = (kind) => {
  if (kind === 'entire_home') return 'Entire home';
  if (kind === 'private_room') return 'Private room';
  return 'Shared room';
};

export default props => (
  <Card>
    <Image src={props.picture} />
    <Title>
      <Price>${props.price}</Price>
      <Caption>{props.children}</Caption>
    </Title>
    <Places>
      <Type>{formatTypeLabel(props.kind)}</Type>
      <span> · </span>
      <Beds>
        {props.bedsCount} {props.bedsCount > 1 ? 'beds' : 'bed'}
      </Beds>
    </Places>
    <Rating>
      <Stars>{times(Number(props.rating), () => <Star src={star} alt="Star" />)}</Stars>
      <Reviews>
        {props.reviewsCount}
        {props.isSuperhost && ' · Superhost'}
      </Reviews>
    </Rating>
  </Card>
);
