import React, { Component } from "react";
import styled from "styled-components";
import { Caption } from "../common/Caption";
import { Head } from "../common/Head";
import { Card } from "../common/Card";
import { Image } from "../common/Image";
import { Title } from "../common/Title";
import { Arrow } from "../common/Arrow";
import { Price as Name } from "../common/Price";
import { More } from "../common/More";
import { Slider } from "../common/Slider";
import { SliderBtn } from "../common/SliderBtn";
import chumley from "./chumley.png";
import hanjan from "./hanjan.png";
import primeMeats from "./primeMeats.png";
import seaprice from "./seaprice.png";
import arrow from "../arrow.svg";

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
const Price = styled.span`
  margin-top: 6px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  font-weight: lighter;
  color: #383838;
  opacity: 0.9;
`;

export default function() {
  return (
    <Popular>
      <div className="container">
        <Head>
          <Caption>Popular reservations around the world</Caption>
          <More href="#">
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
  );
}
