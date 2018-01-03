import React, { Component } from "react";
import styled from "styled-components";

import { Head, Caption } from "../Explore";
import forestTherapy from "./forestTherapy.png";
import whaleWatching from "./whaleWatching.png";
import tableMountain from "./tableMountain.png";
import salsaNight from "./salsaNight.png";
import star from "./star.svg";
import arrow from "./arrow.svg";

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
  font-weight: 900;
`;

export const Name = styled.span`
  font-weight: 400;
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
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #383838;
`;

export const More = styled.a`
  position: relative;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 400;
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

export default function() {
  return (
    <React.Fragment>
      <Head>
        <Caption>Experiences</Caption>
        <More href="./see-all">
          See all <Arrow style={{ backgroundImage: `url(${arrow})` }} />
        </More>
      </Head>
      <div className="row">
        <div className="col-md-3">
          <Card>
            <Image src={forestTherapy} />
            <Title>
              <Price>$29</Price>
              <Name> Forest therapy</Name>
            </Title>
            <Rating>
              <Stars>
                <Star src={star} alt="Star" />
                <Star src={star} alt="Star" />
                <Star src={star} alt="Star" />
                <Star src={star} alt="Star" />
                <Star src={star} alt="Star" />
              </Stars>
              <Reviews>44 reviews</Reviews>
            </Rating>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <Image src={whaleWatching} />
            <Title>
              <Price>$69</Price>
              <Name> Whale watching</Name>
            </Title>
            <Rating>
              <Stars>
                <Star src={star} alt="Star" />
                <Star src={star} alt="Star" />
                <Star src={star} alt="Star" />
                <Star src={star} alt="Star" />
                <Star src={star} alt="Star" />
              </Stars>
              <Reviews>46 reviews</Reviews>
            </Rating>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <Image src={tableMountain} />
            <Title>
              <Price>$69</Price>
              <Name> Table Mountain Summit, Cable Car Down</Name>
            </Title>
            <Rating>
              <Stars>
                <Star src={star} alt="Star" />
                <Star src={star} alt="Star" />
                <Star src={star} alt="Star" />
                <Star src={star} alt="Star" />
                <Star src={star} alt="Star" />
              </Stars>
              <Reviews>44 reviews</Reviews>
            </Rating>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <Image src={salsaNight} />
            <Title>
              <Price>$50</Price>
              <Name> Salsa Night</Name>
            </Title>
            <Rating>
              <Stars>
                <Star src={star} alt="Star" />
                <Star src={star} alt="Star" />
                <Star src={star} alt="Star" />
                <Star src={star} alt="Star" />
                <Star src={star} alt="Star" />
              </Stars>
              <Reviews>44 reviews</Reviews>
            </Rating>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
}
