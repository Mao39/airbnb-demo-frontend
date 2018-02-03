import React from 'react';
import { Head, Caption } from '../Head';
import { Slider, Section } from '../Slider';
import Card from './Card';
import paris from '../../UI/paris.png';
import seoul from '../../UI/seoul.png';
import tokyo from '../../UI/tokyo.png';
import miami from '../../UI/miami.png';
import losAngeles from '../../UI/losAngeles.png';
import capeTown from '../../UI/capeTown.png';

const Featured = Section.extend`
  &::after {
    transform: translateY(0);
  }
`;

export default () => (
  <div className="container">
    <Featured>
      <Head>
        <Caption>Featured destinations</Caption>
      </Head>
      <Slider>
        <div className="row">
          <div className="col-xs-4 col-sm-3 col-md-2">
            <Card imgSrc={paris}>Paris</Card>
          </div>
          <div className="col-xs-4 col-sm-3 col-md-2">
            <Card imgSrc={miami}>Miami</Card>
          </div>
          <div className="col-xs-4 col-sm-3 col-md-2">
            <Card imgSrc={tokyo}>Tokyo</Card>
          </div>
          <div className="col-xs-4 col-sm-3 col-md-2">
            <Card imgSrc={capeTown}>Cape town</Card>
          </div>
          <div className="col-xs-4 col-sm-3 col-md-2">
            <Card imgSrc={seoul}>Seoul</Card>
          </div>
          <div className="col-xs-4 col-sm-3 col-md-2">
            <Card imgSrc={losAngeles}>Los Angeles</Card>
          </div>
        </div>
      </Slider>
    </Featured>
  </div>
);
