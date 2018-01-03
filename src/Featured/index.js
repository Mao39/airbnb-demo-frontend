import React, { Component } from "react";
import styled from "styled-components";

import { Head, Caption } from "../Explore";
import { Card, Image, Title, Arrow, Price as Name } from "../Experiences";
import { Slider, SliderBtn } from "../Homes";
import star from "../Experiences/star.svg";
import paris from "./paris.png";
import seoul from "./seoul.png";
import tokyo from "./tokyo.png";
import miami from "./miami.png";
import losAngeles from "./losAngeles.png";
import capeTown from "./capeTown.png";
import arrow from "../Experiences/arrow.svg";

export const Featured = styled.section``;

export default function() {
  return (
    <React.Fragment>
      <Featured>
        <div className="container">
          <Head>
            <Caption>Featured destinations</Caption>
          </Head>
          <Slider>
            <div className="row">
              <div className="col-md-2">
                <Card>
                  <Image src={paris} />
                  <Title>
                    <Name>Paris</Name>
                  </Title>
                </Card>
              </div>
              <div className="col-md-2">
                <Card>
                  <Image src={miami} />
                  <Title>
                    <Name>Miami</Name>
                  </Title>
                </Card>
              </div>
              <div className="col-md-2">
                <Card>
                  <Image src={tokyo} />
                  <Title>
                    <Name>Tokyo</Name>
                  </Title>
                </Card>
              </div>
              <div className="col-md-2">
                <Card>
                  <Image src={capeTown} />
                  <Title>
                    <Name>Cape town</Name>
                  </Title>
                </Card>
              </div>
              <div className="col-md-2">
                <Card>
                  <Image src={seoul} />
                  <Title>
                    <Name>Seoul</Name>
                  </Title>
                </Card>
              </div>
              <div className="col-md-2">
                <Card>
                  <Image src={losAngeles} />
                  <Title>
                    <Name>Los Angeles</Name>
                  </Title>
                </Card>
              </div>
            </div>
            <SliderBtn style={{ backgroundImage: `url(${arrow})` }} />
          </Slider>
        </div>
      </Featured>
    </React.Fragment>
  );
}
