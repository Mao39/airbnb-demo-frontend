import React from 'react';
import Card from './Card';
import { Slider, Section } from '../Slider';
import { Head, Caption, More } from '../Head';
import forestTherapy from '../../UI/forestTherapy.png';
import whaleWatching from '../../UI/whaleWatching.png';
import tableMountain from '../../UI/tableMountain.png';
import salsaNight from '../../UI/salsaNight.png';

export default () => (
  <div className="container">
    <Section>
      <Head>
        <div className="row">
          <div className="col-xs-9 col-sm-10">
            <Caption>Experiences</Caption>
          </div>
          <div className="col-xs-3 col-sm-2">
            <More to="/">See all</More>
          </div>
        </div>
      </Head>
      <Slider>
        <div className="row">
          <div className="col-xs-6 col-sm-4 col-md-3">
            <Card imgSrc={forestTherapy} price="29" numberReviews="44">
              Forest therapy
            </Card>
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3">
            <Card imgSrc={whaleWatching} price="69" numberReviews="46">
              Whale watching
            </Card>
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3">
            <Card imgSrc={tableMountain} price="69" numberReviews="44">
              Table Mountain Summit, Cable Car Down
            </Card>
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3">
            <Card imgSrc={salsaNight} price="50" numberReviews="44">
              Salsa Night
            </Card>
          </div>
        </div>
      </Slider>
    </Section>
  </div>
);
