import React, { Component } from "react";
import styled from "styled-components";
import { Slider, SliderBtn } from "../Slider";
import Card from "./Card";
import { Head, Caption, More } from "../Head";
import laSalentina from "./laSalentina.png";
import privateBed from "./privateBed.png";
import dreamyTropical from "./dreamyTropical.png";

const Homes = styled.section``;

const Arrow = SliderBtn.extend`
  margin-top: 5.1rem;
`;

export default function() {
  return (
    <Homes>
      <div className="container">
        <Head>
          <div className="row">
            <div className="col-xs-9 col-sm-10 col-md-10">
              <Caption>Homes</Caption>
            </div>
            <div className="col-xs-3 col-sm-2 col-md-2">
              <More href="#">See all</More>
            </div>
          </div>
        </Head>
        <Slider>
          <div className="row">
            <div className="col-xs-8 col-sm-5 col-md-4">
              <Card
                imgSrc={laSalentina}
                price="82"
                homeType="Entire house"
                numberBeds="9 beds"
                numberReviews="97"
                hostType="Superhost"
              >
                La Salentina, see, nature & relax
              </Card>
            </div>
            <div className="col-xs-8 col-sm-5 col-md-4">
              <Card
                imgSrc={privateBed}
                price="82"
                homeType="Entire house"
                numberBeds="5 beds"
                numberReviews="161"
                hostType="Superhost"
              >
                Your private 3 bedr. riad and exclusi...
              </Card>
            </div>
            <div className="col-xs-8 col-sm-5 col-md-4">
              <Card
                imgSrc={dreamyTropical}
                price="200"
                homeType="Entire treehouse"
                numberBeds="1 bed"
                numberReviews="364"
                hostType="Superhost"
              >
                Dreamy Tropical Tree House
              </Card>
            </div>
            <Arrow />
          </div>
        </Slider>
      </div>
    </Homes>
  );
}
