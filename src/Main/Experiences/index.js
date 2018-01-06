import React, { Component } from "react";
import styled from "styled-components";
import { Slider, SliderBtn, SliderImg, Wrap } from "../Slider";
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
import { Head, Caption, More, Arrow } from "../Head";
import forestTherapy from "./forestTherapy.png";
import whaleWatching from "./whaleWatching.png";
import tableMountain from "./tableMountain.png";
import salsaNight from "./salsaNight.png";
import star from "../star.svg";
import arrow from "../arrow.svg";

const Experiences = styled.section``;

export default function() {
  return (
    <Experiences>
      <div className="container">
        <Head>
          <Caption>Experiences</Caption>
          <More href="#">
            See all <Arrow style={{ backgroundImage: `url(${arrow})` }} />
          </More>
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
            {/* <Wrap>
            <SliderBtn>
              <SliderImg src={arrow} />
            </SliderBtn>
          </Wrap> */}
          </div>
        </Slider>
      </div>
    </Experiences>
  );
}
