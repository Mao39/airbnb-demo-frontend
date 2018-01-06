import React, { Component } from "react";
import styled from "styled-components";
import { Slider, SliderBtn } from "../Slider";
import { Card, Image, Title, Price } from "../Card";
import { Head, Caption } from "../Head";
import paris from "./paris.png";
import seoul from "./seoul.png";
import tokyo from "./tokyo.png";
import miami from "./miami.png";
import losAngeles from "./losAngeles.png";
import capeTown from "./capeTown.png";

const Name = Price.extend`
  font-size: 12px;
  line-height: 14px;

  @media (min-width: 320px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const Featured = styled.section``;

const Arrow = SliderBtn.extend`
  margin-top: 5.1rem;
`;

export default function() {
  return (
    <Featured>
      <div className="container">
        <Head>
          <Caption>Featured destinations</Caption>
        </Head>
        <Slider>
          <div className="row">
            <div className="col-md-2 col-sm-3 col-xs-4">
              <Card>
                <Image src={paris} />
                <Title>
                  <Name>Paris</Name>
                </Title>
              </Card>
            </div>
            <div className="col-md-2 col-sm-3 col-xs-4">
              <Card>
                <Image src={miami} />
                <Title>
                  <Name>Miami</Name>
                </Title>
              </Card>
            </div>
            <div className="col-md-2 col-sm-3 col-xs-4">
              <Card>
                <Image src={tokyo} />
                <Title>
                  <Name>Tokyo</Name>
                </Title>
              </Card>
            </div>
            <div className="col-md-2 col-sm-3 col-xs-4">
              <Card>
                <Image src={capeTown} />
                <Title>
                  <Name>Cape town</Name>
                </Title>
              </Card>
            </div>
            <div className="col-md-2 col-sm-3 col-xs-4">
              <Card>
                <Image src={seoul} />
                <Title>
                  <Name>Seoul</Name>
                </Title>
              </Card>
            </div>
            <div className="col-md-2 col-sm-3 col-xs-4">
              <Card>
                <Image src={losAngeles} />
                <Title>
                  <Name>Los Angeles</Name>
                </Title>
              </Card>
            </div>
            <Arrow />
          </div>
        </Slider>
      </div>
    </Featured>
  );
}
