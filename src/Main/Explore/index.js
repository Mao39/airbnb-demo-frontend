import React, { Component } from "react";
import styled from "styled-components";
import homes from "./homes.png";
import experiences from "./experiences.png";
import restaurants from "./restaurants.png";
import { Head, Caption } from "../Head";
import { Slider } from "../Slider";

const Card = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  padding-bottom: 11px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background-repeat: no-repeat;
  background-size: 96px 72px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  cursor: pointer;

  @media (min-width: 320px) {
    flex-direction: row;
    align-items: center;
    padding: 0;
  }
`;

const Name = styled.span`
  padding-top: 14px;
  padding-left: 12px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 14px;
  font-weight: bold;
  color: #383838;

  @media (min-width: 320px) {
    font-size: 17px;
    line-height: 20px;
    padding-top: 0;
    paddint-left: 24px;
  }
`;

const Explore = styled.section`
  display: flex;
`;

const Image = styled.img`
  width: 100%;
  height: 78px;
  border-radius: 4px 4px 0 0;
  object-fit: cover;

  @media (min-width: 320px) {
    width: 96px;
    height: 72px;
    border-radius: 4px 0 0 4px;
    object-fit: auto;
  }
`;

export default function() {
  return (
    <Explore>
      <div className="container">
        <Head>
          <Caption>Explore Airbnb</Caption>
        </Head>
        <Slider>
          <div className="row">
            <div className="col-md-4 col-sm-5 col-xs-6">
              <Card>
                <Image src={homes} alt="Homes" />
                <Name>Homes</Name>
              </Card>
            </div>
            <div className="col-md-4 col-sm-5 col-xs-6">
              <Card>
                <Image src={experiences} alt="Experiences" />
                <Name>Experiences</Name>
              </Card>
            </div>
            <div className="col-md-4 col-sm-5 col-xs-6">
              <Card>
                <Image src={restaurants} alt="Restaurants" />
                <Name>Restaurants</Name>
              </Card>
            </div>
          </div>
        </Slider>
      </div>
    </Explore>
  );
}
