import React, { Component } from "react";
import styled from "styled-components";
import { Slider, SliderBtn } from "../Slider";
import { Card, Image, Title, Price } from "../Card";
import { Head, Caption, More } from "../Head";
import chumley from "./chumley.png";
import hanjan from "./hanjan.png";
import primeMeats from "./primeMeats.png";
import seaprice from "./seaprice.png";

const Popular = styled.section``;

const Place = styled.span`
  margin-top: 12px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 10px;
  line-height: 12px;
  font-weight: bold;
  color: #383838;
  text-transform: uppercase;
`;

const Name = Price.extend`
  font-size: 18px;
  line-height: 21px;
`;

const Rate = styled.span`
  margin-top: 4px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  font-weight: lighter;
  color: #383838;
  opacity: 0.9;
`;

const Arrow = SliderBtn.extend`
  margin-top: 4rem;
`;

export default function() {
  return (
    <Popular>
      <div className="container">
        <Head>
          <div className="row">
            <div className="col-md-11 col-sm-10 col-xs-9">
              <Caption>Popular reservations around the world</Caption>
            </div>
            <div className="col-md-1 col-sm-2 col-xs-3">
              <More href="#">See all</More>
            </div>
          </div>
        </Head>
        <Slider>
          <div className="row">
            <div className="col-md-3 col-sm-4 col-xs-6">
              <Card>
                <Image src={chumley} />
                <Place>Speakeasy</Place>
                <Title>
                  <Name>Chumley’s</Name>
                </Title>
                <Rate>About $60 per person</Rate>
              </Card>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6">
              <Card>
                <Image src={hanjan} />
                <Place>Korean gastropub</Place>
                <Title>
                  <Name>Hanjan</Name>
                </Title>
                <Rate>About $50 per person</Rate>
              </Card>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6">
              <Card>
                <Image src={primeMeats} />
                <Place>German american</Place>
                <Title>
                  <Name>Prime Meats</Name>
                </Title>
                <Rate>About $55 per person</Rate>
              </Card>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6">
              <Card>
                <Image src={seaprice} />
                <Place>Fine seafood</Place>
                <Title>
                  <Name>Seaprice</Name>
                </Title>
                <Rate>About $70 per person</Rate>
              </Card>
            </div>
            <Arrow />
          </div>
        </Slider>
      </div>
    </Popular>
  );
}
