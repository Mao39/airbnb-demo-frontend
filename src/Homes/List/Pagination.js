import React, { Component } from "react";
import styled from "styled-components";
import arrow from "../../UI/rightGreenArrow.svg";
import iconMap from "../../UI/location.svg";

const Pagination = styled.div`
  position: relative;
  margin-top: 40px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  text-align: center;
`;

const Pages = styled.div``;

const Page = styled.a`
  display: inline-block;
  margin-right: 8px;
  margin-left: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  line-height: 32px;
  color: #0f7276;
  text-decoration: none;
  vertical-align: middle;

  ${props =>
    props.active &&
    `
      background: #008489;
      color: #fff;
    `};
`;

const Next = styled.span`
  display: inline-block;
  margin-right: 8px;
  margin-left: 8px;
  width: 32px;
  height: 32px;
  border: 1px solid #008489;
  border-radius: 50%;
  color: #fff;
  background: url(${arrow}) no-repeat;
  backgrouns-size: cover;
  background-position: 12.5px 10px;
  vertical-align: middle;
`;

const Total = styled.p`
  margin-top: 20px;
  color: #383838;
`;

const Invite = styled.p`
  margin-top: 24px;
  margin-bottom: 88px;
  color: #636363;
`;

const IconMap = styled.button`
  position: absolute;
  right: 8px;
  bottom: 24px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: url(${iconMap}) no-repeat center;
  background-size: 16px 20px;
  border: 1px solid rgba(72, 72, 72, 0.16);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);

  @media (min-width: 768px) {
    display: none;
  }
`;

export default () => {
  return (
    <Pagination>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Pages>
              <Page href="" active>
                1
              </Page>
              <Page href="">2</Page>
              <Page href="">3</Page>
              <Page>...</Page>
              <Page href="">17</Page>
              <Next href="" />
            </Pages>
            <Total>1 – 18 of 300+ Rentals</Total>
          </div>
          <div className="col-xs-12">
            <Invite>
              Enter dates to see full pricing. Additional fees apply. Taxes may
              be added.
            </Invite>
            <IconMap />
          </div>
        </div>
      </div>
    </Pagination>
  );
};
