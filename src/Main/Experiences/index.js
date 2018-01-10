import React, { Component } from "react";
import styled from "styled-components";
import { Slider, SliderBtn } from "../Slider";
import Card from "./Card";
import { Head, Caption, More } from "../Head";
import forestTherapy from "../../UI/forestTherapy.png";
import whaleWatching from "../../UI/whaleWatching.png";
import tableMountain from "../../UI/tableMountain.png";
import salsaNight from "../../UI/salsaNight.png";

const Experiences = styled.section``;

const Arrow = SliderBtn.extend`
  margin-top: 9.6rem;
`;

export default function() {
  return (
    <Experiences>
      <div className="container">
        <Head>
          <div className="row">
            <div className="col-xs-9 col-sm-10 col-md-10">
              <Caption>Experiences</Caption>
            </div>
            <div className="col-xs-3 col-sm-2 col-md-2">
              <More href="#">See all</More>
            </div>
          </div>
        </Head>
        <Slider>
          <div className="row">
            <div className="col-xs-6 col-sm-4 col-md-3">
              <Card imgSrc={forestTherapy} price="29" numberReviews="44">
                Forest therapy
              </Card>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-3">
              <Card imgSrc={whaleWatching} price="69" numberReviews="46">
                Whale watching
              </Card>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-3">
              <Card imgSrc={tableMountain} price="69" numberReviews="44">
                Table Mountain Summit, Cable Car Down
              </Card>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-3">
              <Card imgSrc={salsaNight} price="50" numberReviews="44">
                Salsa Night
              </Card>
            </div>
            <Arrow />
          </div>
        </Slider>
      </div>
    </Experiences>
  );
}
