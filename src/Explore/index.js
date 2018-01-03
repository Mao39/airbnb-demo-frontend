import React, { Component } from "react";
import styled from "styled-components";

import homes from "./homes.png";
import experiences from "./experiences.png";
import restaurants from "./restaurants.png";

export const Head = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 48px;
  margin-bottom: 24px;
`;

export const Caption = styled.h3`
  margin: 0;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 32px;
  line-height: 34px;
  color: #383838;
`;

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
  font-weight: 900;
  color: #383838;
  background-repeat: no-repeat;
  background-size: 96px 72px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  cursor: pointer;
`;

export default function() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
