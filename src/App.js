import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "normalize.css";
import "flexboxgrid2";
import "./index.css";
import Header from "./Header";
import Main from "./Main";
import Homes from "./Homes";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Route path="/" exact component={Main} />
          <Route path="/homes" component={Homes} />
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
