import React, { Component } from "react";
import styled from "styled-components";

import { Head, Caption } from "../Explore";
import {
  Card,
  Image,
  Title,
  More,
  Arrow,
  Price,
  Price as Name,
  Rating,
  Stars,
  Star,
  Reviews
} from "../Experiences";
import star from "../Experiences/star.svg";
import laSalentina from "./laSalentina.png";
import privateBed from "./privateBed.png";
import dreamyTropical from "./dreamyTropical.png";
import arrow from "../Experiences/arrow.svg";

export const Homes = styled.section``;

export const Slider = styled.div`
  position: relative;
`;

export const Places = styled.div`
  margin-top: 8px;
`;
export const Type = styled.span`
  margin-right: 8px;
  font-size: 15px;
  line-height: 18px;
  font-weight: 100;
`;
export const Beds = styled.span`
  margin-left: 8px;
  font-size: 15px;
  line-height: 18px;
  font-weight: 100;
`;

export const SliderBtn = styled.button`
  position: absolute;
  top: 35%;
  right: -20px;
  width: 40px;
  height: 40px;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 50%;
  background: #fff;
  background-repeat: no-repeat;
  background-position: center center;
  transform: translateY(-50%);
  cursor: pointer;
`;

export default function() {
  return (
    <React.Fragment>
      <Homes>
        <div className="container">
          <Head>
            <Caption>Homes</Caption>
            <More href="./see-all">
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
    </React.Fragment>
  );
}
