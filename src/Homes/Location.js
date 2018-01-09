import React, { Component } from "react";
import styled from "styled-components";
import GoogleMap from "google-map-react";

const Location = styled.div`
  position: fixed;
`;

const Google = props => (
  <GoogleMap defaultCenter={props.center} defaultZoom={props.zoom} />
);

export default props => {
  return <Google center={{ lat: 54.707424, lng: 20.500578 }} zoom={3} />;
};
