import React, { Component } from "react";
import styled from "styled-components";

export const Head = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 48px;
  margin-bottom: 24px;
`;
export default function() {
  return <Head />;
}
