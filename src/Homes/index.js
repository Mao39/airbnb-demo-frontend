import React, { Component } from "react";
import styled from "styled-components";
import Filters from "./Filters";
import Card from "./Card";

const Main = styled.main`
  background-color: #f5f5f5;
`;

export default function() {
  return (
    <React.Fragment>
      <Filters />
      <Main>
        <Card
          price={82}
          numberBeds="9 beds"
          houseType="Entrie house"
          numberReview={97}
          hostType="Superhost"
        >
          La Salentina, see, nature & relax
        </Card>
      </Main>
    </React.Fragment>
  );
}
