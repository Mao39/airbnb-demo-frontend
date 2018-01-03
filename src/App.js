import React, { Component } from "react";
import "./normalize.css";
import "flexboxgrid2";
import "./index.css";
import styled from "styled-components";

import Header from "./Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Featured from "./Featured";
import Footer from "./Footer";

export const Main = styled.main``;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main>
          <section className="explore">
            <div className="container">
              <Explore />
            </div>
          </section>
          <section className="experiences">
            <div className="container">
              <Experiences />
            </div>
          </section>
          <Homes />
          <Popular />
          <Featured />
        </Main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
