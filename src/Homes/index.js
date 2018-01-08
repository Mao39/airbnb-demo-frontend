import React, { Component } from "react";
import styled from "styled-components";
import Filtres from "./Filtres";
import Card from "../Main/Homes/Card";

const Main = styled.main``;

export default function() {
  return (
    <Main>
      <Filtres />
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
  );
}
