import React, { Component } from "react";
import styled from "styled-components";
import { Slider, SliderBtn, SliderImg, Wrap } from "../Slider";
import { Card, Image, Title, Price as Name } from "../Card";
import { Head, Caption } from "../Head";
import star from "../star.svg";
import paris from "./paris.png";
import seoul from "./seoul.png";
import tokyo from "./tokyo.png";
import miami from "./miami.png";
import losAngeles from "./losAngeles.png";
import capeTown from "./capeTown.png";
import arrow from "../arrow.svg";

const Featured = styled.section``;

export default function() {
  return (
    <Featured>
      <div className="container">
        <Head>
          <Caption>Featured destinations</Caption>
        </Head>
        <Slider>
          <div className="col-md-2 col-sm-3 col-xs-4">
            <Card>
              <Image src={paris} />
              <Title>
                <Name>Paris</Name>
              </Title>
            </Card>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-4">
            <Card>
              <Image src={miami} />
              <Title>
                <Name>Miami</Name>
              </Title>
            </Card>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-4">
            <Card>
              <Image src={tokyo} />
              <Title>
                <Name>Tokyo</Name>
              </Title>
            </Card>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-4">
            <Card>
              <Image src={capeTown} />
              <Title>
                <Name>Cape town</Name>
              </Title>
            </Card>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-4">
            <Card>
              <Image src={seoul} />
              <Title>
                <Name>Seoul</Name>
              </Title>
            </Card>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-4">
            <Card>
              <Image src={losAngeles} />
              <Title>
                <Name>Los Angeles</Name>
              </Title>
            </Card>
          </div>
          {/* <Wrap>
            <SliderBtn>
              <SliderImg src={arrow} />
            </SliderBtn>
          </Wrap> */}
        </Slider>
      </div>
    </Featured>
  );
}
