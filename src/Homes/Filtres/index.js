import React, { Component } from "react";
import styled from "styled-components";

const Filters = styled.div``;

const Btn = styled.button``;

export default function() {
  return (
    <Filters>
      <div className="container">
        <div className="row">
          <Btn>Dates</Btn>
          <Btn>Guests</Btn>
          <Btn>More filters</Btn>
        </div>
      </div>
    </Filters>
  );
}
