import React, { Component } from "react";
import styled from "styled-components";
import Primary from "./Primary";
import Secondary from "./Secondary";

const Footer = styled.footer`
  margin-top: 64px;
  padding-top: 48px;
  box-shadow: 0 -0.5px 0 rgba(72, 72, 72, 0.3);
`;

export default function() {
  return (
    <Footer>
      <Primary />
      <Secondary />
    </Footer>
  );
}
