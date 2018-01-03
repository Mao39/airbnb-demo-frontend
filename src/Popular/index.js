import React, { Component } from "react";
import styled from "styled-components";

import { Head, Caption } from "../Explore";
import { Card, Image, Title, More, Arrow, Price as Name } from "../Experiences";
import { Slider, SliderBtn } from "../Homes";
import star from "../Experiences/star.svg";
import chumley from "./chumley.png";
import hanjan from "./hanjan.png";
import primeMeats from "./primeMeats.png";
import seaprice from "./seaprice.png";
import arrow from "../Experiences/arrow.svg";

export const Popular = styled.section``;
export const Place = styled.span`
  margin-top: 12px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 10px;
  font-weight: 900;
  line-height: 12px;
  color: #383838;
  text-transform: uppercase;
`;
export const Price = styled.span`
  margin-top: 6px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 100;
  line-height: 21px;
  color: #383838;
  opacity: 0.9;
`;

export default function() {
  return (
    <React.Fragment>
      <Popular>
        <div className="container">
          <Head>
            <Caption>Popular reservations around the world</Caption>
            <More href="./see-all">
              See all <Arrow style={{ backgroundImage: `url(${arrow})` }} />
            </More>
          </Head>
          <Slider>
            <div className="row">
              <div className="col-md-3">
                <Card>
                  <Image src={chumley} />
                  <Place>Speakeasy</Place>
                  <Title>
                    <Name>Chumley’s</Name>
                  </Title>
                  <Price>About $60 per person</Price>
                </Card>
              </div>
              <div className="col-md-3">
                <Card>
                  <Image src={hanjan} />
                  <Place>Korean gastropub</Place>
                  <Title>
                    <Name>Hanjan</Name>
                  </Title>
                  <Price>About $50 per person</Price>
                </Card>
              </div>
              <div className="col-md-3">
                <Card>
                  <Image src={primeMeats} />
                  <Place>German american</Place>
                  <Title>
                    <Name>Prime Meats</Name>
                  </Title>
                  <Price>About $55 per person</Price>
                </Card>
              </div>
              <div className="col-md-3">
                <Card>
                  <Image src={seaprice} />
                  <Place>Fine seafood</Place>
                  <Title>
                    <Name>Seaprice</Name>
                  </Title>
                  <Price>About $70 per person</Price>
                </Card>
              </div>
            </div>
            <SliderBtn style={{ backgroundImage: `url(${arrow})` }} />
          </Slider>
        </div>
      </Popular>
    </React.Fragment>
  );
}
