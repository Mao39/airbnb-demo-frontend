import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

const Location = styled.div`
  display: none;
  position: fixed;
  top: 137px;
  right: 0;
  bottom: 0;

  @media (min-width: 768px) {
    display: block;
    width: 34%;
  }
`;

export default class GoogleMap extends Component {
  static = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11,
  };

  render() {
    return (
      <Location>
        <GoogleMapReact
          defaultCenter={this.static.center}
          defaultZoom={this.static.zoom}
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_API_KEY,
            language: 'ru',
          }}
        />
      </Location>
    );
  }
}
