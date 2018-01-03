import React, { Component } from "react";
import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-height: 346px;
  object-fit: cover;
`;

export default function() {
  return <Image />;
}
