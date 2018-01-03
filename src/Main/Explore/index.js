import React, { Component } from "react";
import styled from "styled-components";
import homes from "./homes.png";
import experiences from "./experiences.png";
import restaurants from "./restaurants.png";
import { Head } from "../common/Head";
import { Caption } from "../common/Caption";

export const Card = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 72px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  text-align: center;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 17px;
  line-height: 20px;
  font-weight: bold;
  color: #383838;
  background-repeat: no-repeat;
  background-size: 96px 72px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  cursor: pointer;
`;

export default function() {
  return (
    <section className="explore">
      <div className="container">
        <Head>
          <Caption>Explore Airbnb</Caption>
        </Head>
        <div className="row">
          <div className="col-md-4">
            <Card style={{ backgroundImage: `url(${homes})` }}>Homes</Card>
          </div>
          <div className="col-md-4">
            <Card style={{ backgroundImage: `url(${experiences})` }}>
              Experiences
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ backgroundImage: `url(${restaurants})` }}>
              Restaurants
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
