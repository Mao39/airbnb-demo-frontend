import React, { Component } from "react";
import styled from "styled-components";
import { Head, Caption } from "../Head";
import { Slider, SliderBtn } from "../Slider";
import Card from "./Card";
import paris from "./paris.png";
import seoul from "./seoul.png";
import tokyo from "./tokyo.png";
import miami from "./miami.png";
import losAngeles from "./losAngeles.png";
import capeTown from "./capeTown.png";

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
            <div className="col-xs-4 col-sm-3 col-md-2">
              <Card imgSrc={paris}>Paris</Card>
            </div>
            <div className="col-xs-4 col-sm-3 col-md-2">
              <Card imgSrc={miami}>Miami</Card>
            </div>
            <div className="col-xs-4 col-sm-3 col-md-2">
              <Card imgSrc={tokyo}>Tokyo</Card>
            </div>
            <div className="col-xs-4 col-sm-3 col-md-2">
              <Card imgSrc={capeTown}>Cape town</Card>
            </div>
            <div className="col-xs-4 col-sm-3 col-md-2">
              <Card imgSrc={seoul}>Seoul</Card>
            </div>
            <div className="col-xs-4 col-sm-3 col-md-2">
              <Card imgSrc={losAngeles}>Los Angeles</Card>
            </div>
            <Arrow />
          </div>
        </Slider>
      </div>
    </Featured>
  );
}
