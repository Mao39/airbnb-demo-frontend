import React, { Component } from "react";
import styled from "styled-components";
import { Caption } from "../common/Caption";
import { Head } from "../common/Head";
import { More } from "../common/More";
import { Image } from "../common/Image";
import { Title } from "../common/Title";
import { Arrow } from "../common/Arrow";
import { Price } from "../common/Price";
import { Name } from "../common/Name";
import { Rating } from "../common/Rating";
import { Stars } from "../common/Stars";
import { Star } from "../common/Star";
import { Reviews } from "../common/Reviews";
import { Card } from "../common/Card";
import { Slider } from "../common/Slider";
import { SliderBtn } from "../common/SliderBtn";
import forestTherapy from "./forestTherapy.png";
import whaleWatching from "./whaleWatching.png";
import tableMountain from "./tableMountain.png";
import salsaNight from "./salsaNight.png";
import star from "../star.svg";
import arrow from "../arrow.svg";

export default function() {
  return (
    <React.Fragment>
      <section className="experiences">
        <div className="container">
          <Head>
            <Caption>Experiences</Caption>
            <More href="./see-all">
              See all <Arrow style={{ backgroundImage: `url(${arrow})` }} />
            </More>
          </Head>
          <div className="row">
            <div className="col-md-3">
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
            <div className="col-md-3">
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
            <div className="col-md-3">
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
            <div className="col-md-3">
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
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
