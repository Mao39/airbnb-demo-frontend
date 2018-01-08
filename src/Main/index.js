import React, { Component } from "react";
import styled from "styled-components";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Featured from "./Featured";
import Footer from "../Footer";

const Main = styled.main``;

export default function() {
  return (
    <React.Fragment>
      <Main>
        <Explore />
        <Experiences />
        <Homes />
        <Popular />
        <Featured />
      </Main>
      <Footer />
    </React.Fragment>
  );
}
