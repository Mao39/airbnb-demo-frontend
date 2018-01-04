import React, { Component } from "react";
import styled from "styled-components";

import {
  Slider,
  SliderBtn,
  Card,
  Image,
  Title,
  Price,
  Name,
  Rating,
  Stars,
  Star,
  Reviews
} from "../Slider.js";
import { Head, Caption, More, Arrow } from "../Head.js";

import star from "../star.svg";
import laSalentina from "./laSalentina.png";
import privateBed from "./privateBed.png";
import dreamyTropical from "./dreamyTropical.png";
import arrow from "../arrow.svg";

const Homes = styled.section``;

const Places = styled.div`
  margin-top: 8px;
`;

const Type = styled.span`
  margin-right: 8px;
  font-size: 15px;
  line-height: 18px;
  font-weight: lighter;
`;
const Beds = styled.span`
  margin-left: 8px;
  font-size: 15px;
  line-height: 18px;
  font-weight: lighter;
`;

export default function() {
  return (
    <Homes>
      <div className="container">
        <Head>
          <Caption>Homes</Caption>
          <More href="#">
            See all <Arrow style={{ backgroundImage: `url(${arrow})` }} />
          </More>
        </Head>
        <Slider>
          <div className="row">
            <div className="col-md-4">
              <Card>
                <Image src={laSalentina} />
                <Title>
                  <Price>$82</Price>
                  <Name> La Salentina, see, nature & relax</Name>
                </Title>
                <Places>
                  <Type>Entire house</Type>
                  ·
                  <Beds>9 beds</Beds>
                </Places>
                <Rating>
                  <Stars>
                    <Star src={star} alt="Star" />
                    <Star src={star} alt="Star" />
                    <Star src={star} alt="Star" />
                    <Star src={star} alt="Star" />
                    <Star src={star} alt="Star" />
                  </Stars>
                  <Reviews>97 · Superhost</Reviews>
                </Rating>
              </Card>
            </div>
            <div className="col-md-4">
              <Card>
                <Image src={privateBed} />
                <Title>
                  <Price>$82</Price>
                  <Name> Your private 3 bedr. riad and exclusi...</Name>
                </Title>
                <Places>
                  <Type>Entire house</Type>
                  ·
                  <Beds>5 beds</Beds>
                </Places>
                <Rating>
                  <Stars>
                    <Star src={star} alt="Star" />
                    <Star src={star} alt="Star" />
                    <Star src={star} alt="Star" />
                    <Star src={star} alt="Star" />
                    <Star src={star} alt="Star" />
                  </Stars>
                  <Reviews>161 · Superhost</Reviews>
                </Rating>
              </Card>
            </div>
            <div className="col-md-4">
              <Card>
                <Image src={dreamyTropical} />
                <Title>
                  <Price>$200</Price>
                  <Name> Dreamy Tropical Tree House</Name>
                </Title>
                <Places>
                  <Type>Entire treehouse</Type>
                  ·
                  <Beds>1 bed</Beds>
                </Places>
                <Rating>
                  <Stars>
                    <Star src={star} alt="Star" />
                    <Star src={star} alt="Star" />
                    <Star src={star} alt="Star" />
                    <Star src={star} alt="Star" />
                    <Star src={star} alt="Star" />
                  </Stars>
                  <Reviews>364 · Superhost</Reviews>
                </Rating>
              </Card>
            </div>
          </div>
          <SliderBtn style={{ backgroundImage: `url(${arrow})` }} />
        </Slider>
      </div>
    </Homes>
  );
}
