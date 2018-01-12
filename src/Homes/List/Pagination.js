import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import arrow from "../../UI/rightGreenArrow.svg";
import iconMap from "./location.svg";

const Pagination = styled.div`
  position: relative;
  margin-top: 40px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
  text-align: center;
`;

const Pages = styled.div`
  line-height: 32px;
  color: #0f7276;
  text-decoration: none;
  vertical-align: middle;
`;

const Page = styled(Link)`
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

  background: ${props => (props.active ? "#008489" : "transparent")};
  color: ${props => (props.active ? "#fff" : "#0f7276")};
`;

const Reduction = styled.span`
  display: inline-block;
  margin-right: 8px;
  margin-left: 8px;
  width: 32px;
  height: 32px;
`;

const Next = styled.button`
  display: inline-block;
  margin-right: 8px;
  margin-left: 8px;
  width: 32px;
  height: 32px;
  border: 1px solid #008489;
  border-radius: 50%;
  color: #fff;
  background: url(${arrow}) no-repeat;
  background-position: 12.5px 10px;
  vertical-align: middle;
  cursor: pointer;
`;

const Total = styled.p`
  margin-top: 20px;
  font-weight: bold;
  color: #383838;
`;

const Invite = styled.p`
  margin-top: 24px;
  margin-bottom: 88px;
  font-weight: 600;
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

export default class PaginatePages extends React.Component {
  state = {
    onActive: false
  };

  changePage = () => {};

  render() {
    return (
      <Pagination>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Pages>
                <Page to="/homes" active="active">
                  1
                </Page>
                <Page to="/homes">2</Page>
                <Page to="/homes">3</Page>
                <Reduction>...</Reduction>
                <Page to="/homes">17</Page>
                <Next />
              </Pages>
              <Total>1 – 18 of 300+ Rentals</Total>
            </div>
            <div className="col-xs-12">
              <Invite>
                Enter dates to see full pricing. Additional fees apply. Taxes
                may be added.
              </Invite>
              <IconMap />
            </div>
          </div>
        </div>
      </Pagination>
    );
  }
}
