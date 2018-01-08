import React, { Component } from "react";
import styled from "styled-components";
import homes from "./homes.png";
import experiences from "./experiences.png";
import restaurants from "./restaurants.png";
import { Head, Caption } from "../Head";
import { Slider } from "../Slider";
import Card from "./Card";

const Explore = styled.section``;

export default function() {
  return (
    <Explore>
      <div className="container">
        <Head>
          <Caption>Explore Airbnb</Caption>
        </Head>
        <Slider>
          <div className="row">
            <div className="col-md-4 col-sm-5 col-xs-6">
              <Card imgSrc={homes}>Homes</Card>
            </div>
            <div className="col-md-4 col-sm-5 col-xs-6">
              <Card imgSrc={experiences}>Experiences</Card>
            </div>
            <div className="col-md-4 col-sm-5 col-xs-6">
              <Card imgSrc={restaurants}>Restaurants</Card>
            </div>
          </div>
        </Slider>
      </div>
    </Explore>
  );
}
