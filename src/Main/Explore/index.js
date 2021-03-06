import React from 'react';
import styled from 'styled-components';
import { Head, Caption } from '../Head';
import { Slider } from '../Slider';
import Card from './Card';
import homes from '../../UI/homes.png';
import experiences from '../../UI/experiences.png';
import restaurants from '../../UI/restaurants.png';

const Explore = styled.section``;

export default () => (
  <Explore>
    <div className="container">
      <Head>
        <Caption>Explore Airbnb</Caption>
      </Head>
      <Slider>
        <div className="row">
          <div className="col-md-4 col-sm-5 col-xs-6">
            <Card to="/homes" imgSrc={homes}>
              Homes
            </Card>
          </div>
          <div className="col-md-4 col-sm-5 col-xs-6">
            <Card to="/" imgSrc={experiences}>
              Experiences
            </Card>
          </div>
          <div className="col-md-4 col-sm-5 col-xs-6">
            <Card to="/" imgSrc={restaurants}>
              Restaurants
            </Card>
          </div>
        </div>
      </Slider>
    </div>
  </Explore>
);
