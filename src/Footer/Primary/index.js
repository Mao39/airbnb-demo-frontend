import React, { Component } from "react";
import styled from "styled-components";
import Selects from "./Selects";
import Nav from "./Nav";

export default function() {
  return (
    <div className="container">
      <div className="row">
        <Selects />
        <Nav />
      </div>
    </div>
  );
}
