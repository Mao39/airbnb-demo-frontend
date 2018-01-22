import React, { Component } from "react";
import styled from "styled-components";
import { Slider, SliderBtn } from "../Slider";
import Card from "../../Homes/Card";
import { Head, Caption, More } from "../Head";
import salentina from "../../UI/salentina.png";
import privateBed from "../../UI/privateBed.png";
import dreamyTropical from "../../UI/dreamyTropical.png";

const Homes = styled.section``;

const Arrow = SliderBtn.extend`
  margin-top: 10%;
`;

export default () => {
  return (
    <Homes>
      <div className="container">
        <Head>
          <div className="row">
            <div className="col-xs-9 col-sm-10 col-md-10">
              <Caption>Homes</Caption>
            </div>
            <div className="col-xs-3 col-sm-2">
              <More to="/homes">See all</More>
            </div>
          </div>
        </Head>
        <Slider>
          <div className="row">
            <div className="col-xs-8 col-sm-5 col-md-4">
              <Card
                imgSrc={salentina}
                price={82}
                homeType="Entire house"
                numberBeds={9}
                reviews={97}
                hostType="Superhost"
              >
                La Salentina, see, nature & relax
              </Card>
            </div>
            <div className="col-xs-8 col-sm-5 col-md-4">
              <Card
                imgSrc={privateBed}
                price={82}
                homeType="Entire house"
                numberBeds={5}
                reviews={161}
                hostType="Superhost"
              >
                Your private 3 bedr. riad and exclusi...
              </Card>
            </div>
            <div className="col-xs-8 col-sm-5 col-md-4">
              <Card
                imgSrc={dreamyTropical}
                price={200}
                homeType="Entire treehouse"
                numberBeds={1}
                reviews={364}
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
};
