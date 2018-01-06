import React, { Component } from "react";
import styled from "styled-components";
import { Slider, SliderBtn } from "../Slider";
import {
  Card,
  Image,
  Title,
  Price,
  Name,
  Rating,
  Stars,
  Star,
  Reviews
} from "../Card";
import { Head, Caption, More } from "../Head";
import forestTherapy from "./forestTherapy.png";
import whaleWatching from "./whaleWatching.png";
import tableMountain from "./tableMountain.png";
import salsaNight from "./salsaNight.png";
import star from "../star.svg";

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
            <div className="col-md-10 col-sm-10 col-xs-9">
              <Caption>Experiences</Caption>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-3">
              <More href="#">See all</More>
            </div>
          </div>
        </Head>
        <Slider>
          <div className="row">
            <div className="col-md-3 col-sm-4 col-xs-6">
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
            <div className="col-md-3 col-sm-4 col-xs-6">
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
            <div className="col-md-3 col-sm-4 col-xs-6">
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
            <div className="col-md-3 col-sm-4 col-xs-6">
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
            <Arrow />
          </div>
        </Slider>
      </div>
    </Experiences>
  );
}
