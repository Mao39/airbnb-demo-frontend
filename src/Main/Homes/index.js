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
import star from "../star.svg";
import laSalentina from "./laSalentina.png";
import privateBed from "./privateBed.png";
import dreamyTropical from "./dreamyTropical.png";
import arrow from "../arrow.svg";

const Homes = styled.section``;

const Places = styled.div`
  margin-top: 8px;
`;

const Description = Name.extend`
  font-weight: bold;
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
          <div className="row">
            <div className="col-md-11 col-sm-10 col-xs-9">
              <Caption>Homes</Caption>
            </div>
            <div className="col-md-1 col-sm-2 col-xs-3">
              <More href="#">
                See all <Arrow style={{ backgroundImage: `url(${arrow})` }} />
              </More>
            </div>
          </div>
        </Head>
        <Slider>
          <div className="row">
            <div className="col-md-4 col-sm-5 col-xs-8">
              <Card>
                <Image src={laSalentina} />
                <Title>
                  <Price>$82</Price>
                  <Description> La Salentina, see, nature & relax</Description>
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
            <div className="col-md-4 col-sm-5 col-xs-8">
              <Card>
                <Image src={privateBed} />
                <Title>
                  <Price>$82</Price>
                  <Description>
                    {" "}
                    Your private 3 bedr. riad and exclusi...
                  </Description>
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
            <div className="col-md-4 col-sm-5 col-xs-8">
              <Card>
                <Image src={dreamyTropical} />
                <Title>
                  <Price>$200</Price>
                  <Description> Dreamy Tropical Tree House</Description>
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
            {/* <Wrap>
            <SliderBtn>
              <SliderImg src={arrow} />
            </SliderBtn>
          </Wrap> */}
          </div>
        </Slider>
      </div>
    </Homes>
  );
}
